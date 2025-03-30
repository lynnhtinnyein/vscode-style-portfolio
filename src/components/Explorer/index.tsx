"use client";
import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { pages } from "@/data/pages";
import { SlideDrawer } from "react-slide-drawer";
import Section from "./partials/Section";
import useDimensions from "@/hooks/useDimensions";

const maxExplorerWidth = 180;
const minExplorerWidth = 1;
const sideBarWidth = 48;

const Explorer = () => {
    const { isMobile } = useDimensions();
    const { openedPageIds, showExplorer, setShowExplorer } = useGlobalContext();

    const [isResizable, setIsResizable] = useState<boolean>(false);
    const [explorerWidth, setExplorerWidth] = useState<number>(maxExplorerWidth);
    const [mounted, setMounted] = useState<boolean>(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const resize = useCallback((event: MouseEvent) => {
        event.preventDefault();
        const newWidth = event.clientX - sideBarWidth;
        if (newWidth < 10) {
            setShowExplorer(false);
        }
        if (newWidth < maxExplorerWidth && newWidth >= minExplorerWidth) {
            setExplorerWidth(newWidth);
        }
        if (newWidth >= maxExplorerWidth || newWidth < minExplorerWidth) {
            setIsResizable(false);
        }
    }, []);

    useEffect(() => {
        if (isResizable) {
            window.addEventListener("mousemove", resize);
        } else {
            window.removeEventListener("mousemove", resize);
        }
        return () => window.removeEventListener("mousemove", resize);
    }, [isResizable]);

    useEffect(() => {
        setShowExplorer(!isMobile);
    }, [isMobile]);

    useEffect(() => {
        setExplorerWidth(showExplorer ? maxExplorerWidth : minExplorerWidth);
    }, [showExplorer]);

    if (!mounted) return null;

    return (
        <div className="flex flex-row bg-[var(--color-explorer)] overflow-hidden">
            <SlideDrawer
                show={showExplorer}
                onClose={() => setShowExplorer(false)}
                width={explorerWidth}
                animate={isMobile}
                position="left"
                zIndex={9}
                type={isMobile ? "front" : "slide"}
            >
                <div className="flex-1 flex flex-col bg-[var(--color-explorer)]">
                    {/* Header */}
                    <div className="flex flex-row items-center mx-6 justify-between">
                        <span className="text-xs py-2">EXPLORER</span>
                        <span className="text-xs py-2">•••</span>
                    </div>

                    {/* opened pages */}
                    <Section title="open editors" pageIds={openedPageIds} />

                    {/* all pages */}
                    <Section title="portfolio" pageIds={pages.map((page) => page.id)} />
                </div>
            </SlideDrawer>

            {/* resizer */}
            {showExplorer ? (
                <div
                    className="cursor-col-resize bg-[var(--color-resizer)] hover:bg-[var(--color-resizer-active)] active:bg-[var(--color-resizer-active)]"
                    style={{
                        width: "2px",
                    }}
                    onMouseDown={() => setIsResizable(true)}
                    onMouseUp={() => setIsResizable(false)}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default Explorer;
