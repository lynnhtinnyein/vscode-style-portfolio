'use client'
import { useCallback, useState } from "react";
import FilesIcon from "../icons/vs_code_icons/FilesIcon";
import { pages } from "@/data/pages";
import SettingsIcon from "@/icons/vs_code_icons/SettingsIcon";
import SourceControlIcon from "@/icons/vs_code_icons/SourceControlIcon";

const SideBar = ({ onPageChange, onToggleNavBar }) => {

    const topPages = pages.filter( e => e.showInSideBar && e.position === 'top');
    const bottomPages = pages.filter( e => e.showInSideBar && e.position === 'bottom');

    const [activePageId, setActivePageId] = useState(null);
    const [showNavBar, setShowNavBar] = useState(true);
    const [showSetting, setShowSetting] = useState(false);

    const changeShowNavBar = () => {
        setShowNavBar(!showNavBar)
        onToggleNavBar(!showNavBar);
    };

    const changePage = useCallback( (pageName) => {
        setActivePageId(pageName)
        onPageChange(pageName);
    }, []);
        
    return (
        <div 
            className="flex flex-col justify-between bg-zinc-800"
            style={{
                width: 50
            }}
        >

            {/* top_buttons */}
            <div className="flex flex-col items-center justify-center">

                {/* nav_bar_toggle */}
                <div 
                    className={`p-3 cursor-pointer hover:text-orange-500 ${
                        showNavBar
                        ? 'border-l border-l-orange-500 text-orange-500'
                        : 'text-zinc-500'
                    }`}
                    onClick={changeShowNavBar}
                >
                    <FilesIcon/>
                </div>

                { topPages.map( (page) => 
                    <div 
                        key={page.id}
                        className={`p-3 cursor-pointer hover:text-white ${
                            page.id === activePageId
                            ? 'border-l border-l-white text-white'
                            : 'text-zinc-500'
                        }`}
                        onClick={ () => changePage(page.id) }
                    >
                        { page.sideBarIcon }
                    </div>
                )}

                {/* nav_bar_toggle */}
                <a href="https://github.com/lynnhtinnyein" target="_blank">
                    <div className="p-3 cursor-pointer hover:text-white text-zinc-500">
                        <SourceControlIcon/>
                    </div>
                </a>

            </div>
        
            {/* bottom_buttons */}
            <div className="flex flex-col items-center justify-center">
                { bottomPages.map( (page) => 
                    <div 
                        key={page.id} 
                        className={`p-3 hover:text-white ${
                            page.id === activePageId 
                            ? 'border-l border-l-white text-white'
                            : 'text-zinc-500'
                        }`}
                        onClick={ () => changePage(page.id) }
                    >
                        { page.sideBarIcon }
                    </div>
                )}

                <div 
                    className={`p-3 hover:text-white ${
                        showSetting
                        ? 'border-l border-l-white text-white'
                        : 'text-zinc-500'
                    }`}
                    onClick={ () => setShowSetting(!showSetting) }
                >
                    <SettingsIcon/>
                </div>

            </div>
        
        </div>
    )
}

export default SideBar;