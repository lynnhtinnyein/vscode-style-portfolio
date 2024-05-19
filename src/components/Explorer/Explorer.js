import { usePageController } from "@/context/pages";
import Section from "./partials/Section";
import { pages } from "@/data/pages";
import { useCallback, useEffect, useState } from "react";

const Explorer = () => {
    const { openedPages } = usePageController();
    const [isResizeable, setIsResizeable] = useState(false);
    const [width, setWidth] = useState(150);

    const sideBarWidth = 48;
    const maxWidth = 280;

    const resize = useCallback( (event) => {
        event.preventDefault();
        const newWidth = event.clientX - sideBarWidth;
        if(newWidth < maxWidth && newWidth >= 0){
            setWidth(newWidth);
        }
        if(newWidth > maxWidth || newWidth <= 0) {
            setIsResizeable(false);
        }
    }, []);

    useEffect( () => {
        if(isResizeable){
            window.addEventListener('mousemove', resize);
        } else {
            window.removeEventListener('mousemove', resize);
        }
        return () => window.removeEventListener('mousemove', resize);
    }, [isResizeable]);

    return (
        <div className="flex flex-row">
            <div 
                className="flex flex-col"
                style={{
                    width: width
                }}
            >
                {/* Header */}
                <div className="flex flex-row items-center mx-6 justify-between">
                    <span className="text-xs py-2">EXPLORER</span>
                    <span className="text-xs py-2">•••</span>
                </div>

                {/* opened pages */}
                <Section title="open editors" pageIds={openedPages} />

                {/* all pages */}
                <Section title="portfolio" pageIds={pages.map( page => page.id )} />
            </div>

            {/* resizer */}
            <div
                className="cursor-col-resize hover:bg-gray-500"
                style={{
                    width: '2px'
                }}
                onMouseDown={ () => setIsResizeable(true) }
                onMouseUp={ () => setIsResizeable(false) }
            />
        </div>
    );
};

export default Explorer;
