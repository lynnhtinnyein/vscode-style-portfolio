'use client'
import { useEffect, useState } from "react";
import FilesIcon from "../icons/vs_code_icons/FilesIcon";
import { pages } from "@/data/pages";
import SettingsIcon from "@/icons/vs_code_icons/SettingsIcon";
import SourceControlIcon from "@/icons/vs_code_icons/SourceControlIcon";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { useGlobalContext } from "@/context/GlobalContext";

const SideBar = ({ onToggleNavBar }) => {

    const { isMobile } = useDeviceDetect();
    const { activePage, openPages, dispatch } = useGlobalContext();

    const topPages = pages.filter( e => e.showInSideBar && e.position === 'top');
    const bottomPages = pages.filter( e => e.showInSideBar && e.position === 'bottom');

    const [showNavBar, setShowNavBar] = useState(true);
    const [showSetting, setShowSetting] = useState(false);

    useEffect( () => {
        setShowNavBar(!isMobile);
        onToggleNavBar(!isMobile);
    }, [isMobile]);

    //methods
    const changeShowNavBar = () => {
        setShowNavBar(!showNavBar)
        onToggleNavBar(!showNavBar);
    };

    const openPage = (id) => {
        dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
        
        if(!openPages.includes(id)){
            dispatch({ type: 'SET_OPEN_PAGES', payload: [...openPages, id] });
        }
    };
        
    return (
        <div 
            className="flex flex-col justify-between bg-zinc-800"
            style={{
                maxWidth: 48
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
                            page.id === activePage
                            ? 'border-l border-l-white text-white'
                            : 'text-zinc-500'
                        }`}
                        onClick={ () => openPage(page.id) }
                    >
                        { page.sideBarIcon }
                    </div>
                )}

                {/* nav_bar_toggle */}
                <a href="https://github.com/lynnhtinnyein/vscode_style_portfolio" target="_blank">
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
                            page.id === activePage
                            ? 'border-l border-l-white text-white'
                            : 'text-zinc-500'
                        }`}
                        onClick={ () => openPage(page.id) }
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