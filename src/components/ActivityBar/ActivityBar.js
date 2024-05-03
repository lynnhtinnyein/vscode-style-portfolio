import React from "react";
import { pages } from "@/data/pages";
import { usePages } from "@/context/pages";
import SourceControlIcon from "@public/icons/vs-code-icons/SourceControlIcon";
import FilesIcon from "@public/icons/vs-code-icons/FilesIcon";
import ActionButton from "./partials/ActionButton";
import SettingButton from "./partials/SettingButton";

const ActivityBar = ({ 
    showExplorer, 
    setShowExplorer, 
    isDarkMode, 
    setIsDarkMode 
}) => {
    const { activePage, openPage } = usePages();

    const topPages = pages.filter( e => e.position === 'top');
    const bottomPages = pages.filter( e => e.position === 'bottom');

    return (
        <div className="flex flex-col justify-between bg-zinc-800 min-w-12">
            
            {/* top */}
            <div className="flex flex-col">

                <div
                    className={`flex items-center justify-center cursor-pointer h-12 ${
                        showExplorer
                        ? 'border-l border-l-orange-500 text-orange-500'
                        : 'text-zinc-500'
                    }`}
                    onClick={() => setShowExplorer(!showExplorer)}
                >
                    <FilesIcon/>
                </div>

                {topPages.map( page => (
                    <ActionButton
                        key={page.id}
                        icon={page.activityBarIcon}
                        isActive={page.id === activePage}
                        onClick={() => openPage(page.id)}
                    />
                ))}

                {/* github link button */}
                <a href="https://github.com/lynnhtinnyein/vscode-style-portfolio" target="_blank">
                    <ActionButton
                        isActive={false}
                        icon={<SourceControlIcon/>}
                        onClick={ () => null }
                    />
                </a>
            </div>

            {/* bottom */}
            <div className="flex flex-col">
                {bottomPages.map( page => (
                    <ActionButton
                        key={page.id}
                        id={page.id}
                        icon={page.activityBarIcon}
                        isActive={page.id === activePage}
                        onClick={() => openPage(page.id)}
                    />
                ))}

                {/* setting button */}
                <SettingButton
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
                
            </div>
        </div>
    );
};

export default ActivityBar;
