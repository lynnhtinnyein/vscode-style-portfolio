import { usePages } from "@/context/pages";
import React from "react";
import Tab from "./partials/Tab";

const TabBar = () => {
    const { activePage, openedPages, switchPage, closePage } = usePages();

    return (
        <div className="min-h-8 max-h-8">
            <div className="flex flex-row h-full overflow-auto">
                {openedPages.map( pageId => (
                    <Tab 
                        key={pageId}
                        id={pageId}
                        isActive={pageId === activePage}
                        onClick={() => switchPage(pageId)}
                        onClose={() => closePage(pageId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TabBar;
