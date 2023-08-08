'use client';
import { useCallback, useEffect, useState } from "react";
import ChevronDownIcon from "../icons/vs_code_icons/ChevronDownIcon";
import { pages } from "@/data/pages";
import { useGlobalContext } from "@/context/GlobalContext";
import ChevronRightIcon from "@/icons/vs_code_icons/ChevronRight";

const NavBar = ({ show, onResize }) => {

    const { activePage, openPages, dispatch } = useGlobalContext();

    const sideBarWidth = 50;
    const maxWidth = 280;
    const [width, setWidth ] = useState(180);
    const [resizeable, setResizeable] = useState(false);

    const [showOpenPages, setShowOpenPages] = useState(true);
    const [showAllPages, setShowAllPages] = useState(true);

    const resize = useCallback( (event) => {
        event.preventDefault();
        const newWidth = event.clientX - sideBarWidth;

        setWidth(newWidth);
        if(newWidth > maxWidth || newWidth < 0) {
            setResizeable(false);
        }
        onResize(newWidth);
    }, []);

    useEffect( () => {
        setWidth(show ? 180 : 0);
        onResize(show ? 180 : 0);
    }, [show]);

    const diableResize = () => {
        setResizeable(false);
    }

    useEffect( () => {
        window.addEventListener('mouseup', diableResize);
        return () => window.removeEventListener('mouseup', diableResize);
    }, []);

    useEffect( () => {
        if(resizeable){
            window.addEventListener('mousemove', resize);
        } else {
            window.removeEventListener('mousemove', resize);
        }
        return () => window.removeEventListener('mousemove', resize);
    }, [resizeable]);

    //methods
    const openPage = (id) => {
        dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
        
        if(!openPages.includes(id)){
            dispatch({ type: 'SET_OPEN_PAGES', payload: [...openPages, id] });
        }
    };
    
    return (
        <>
            <div className="bg-zinc-900"
                style={{
                    width,
                    maxWidth
                }}
            >
                <div className="flex flex-row items-center mx-6 justify-between">
                    <span className="text-gray-300 text-xs py-2">EXPLORER</span>
                    <span className="text-gray-300 text-xs py-2">•••</span>
                </div>

                {/* open editors */}
                <div 
                    className="flex flex-row items-center bg-zinc-800 py-1 space-x-1 px-1"
                    onClick={ () => setShowOpenPages(!showOpenPages) }
                >
                    { showOpenPages ? <ChevronDownIcon size="16"/> : <ChevronRightIcon size="16"/> }
                    <span className="text-gray-300 font-bold text-xs">OPEN EDITORS</span>
                </div>

                <div className={`accordion ${ showOpenPages && 'show-accordion'}`}>
                    { openPages.map( id => 
                        <div
                            key={id} 
                            className={`flex flex-row space-x-2 py-1 px-5 cursor-pointer ${ activePage === id && 'bg-zinc-700'}`}
                            onClick={ () => openPage(id) }
                        >
                            { pages.find( e => e.id === id).fileIcon }
                            <span className="text-xs text-yellow-200">{ pages.find( e => e.id === id).name }</span>
                        </div>
                    )}
                </div>

                {/* all pages  */}
                <div 
                    className="flex flex-row items-center bg-zinc-800 py-1 space-x-1 px-1"
                    onClick={ () => setShowAllPages(!showAllPages) }
                >
                    { showAllPages ? <ChevronDownIcon size="16"/> : <ChevronRightIcon size="16"/> }
                    <span className="text-gray-300 font-bold text-xs">PORTFOLIO</span>
                </div>

                <div className={`accordion ${ showAllPages && 'show-accordion'}`}>
                    { pages.map( page => 
                        <div
                            key={page.id} 
                            className={`flex flex-row space-x-2 py-1 px-5 cursor-pointer ${ activePage === page.id && 'bg-zinc-700'}`}
                            onClick={ () => openPage(page.id) }
                        >
                            {page.fileIcon}
                            <span className="text-xs text-yellow-200">{page.name}</span>
                        </div>
                    )}
                </div>

            </div>

            {/* resizer */}
            <div 
                className={`cursor-col-resize hover:bg-gray-500 ${show ? '' : 'hidden'}`}
                style={{
                    padding: 2
                }}
                onMouseDown={ () => setResizeable(true) }
            />
        </>
    )
}

export default NavBar;