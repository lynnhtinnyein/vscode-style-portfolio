"use client";
import React, { useEffect, useState } from "react";
import Tab from "./partials/Tab";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { pages } from "@/data/pages";

const Tabs = () => {
    const { activePageId, openedPageIds, closePage } = useGlobalContext();
    const openedPages = openedPageIds.map((pageId) => pages.find((page) => page.id === pageId));

    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || openedPages.length === 0) return null;

    return (
        <div className="min-h-8 max-h-8">
            <div className="flex flex-row h-full overflow-auto gap-x-[1px] bg-[var(--color-header)]">
                {openedPages.map((page) => (
                    <Tab
                        key={page.id}
                        page={page}
                        isActive={page.id === activePageId}
                        onClose={() => closePage(page.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tabs;
