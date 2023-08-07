'use client';
import { useCallback, useEffect, useState } from "react";
import ChevronDownIcon from "../icons/vs_code_icons/ChevronDownIcon";

const NavBar = ({ show = true, onResize }) => {

    const sideBarWidth = 50;
    const maxWidth = 280;
    const [width, setWidth ] = useState(180);
    const [resizeable, setResizeable] = useState(false);

    const resize = useCallback( (event) => {

        event.preventDefault();
        const newWidth = event.clientX - sideBarWidth - 2;

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

    useEffect( () => {

        if(resizeable){
            window.addEventListener('mousemove', resize);
        } else {
            window.removeEventListener('mousemove', resize);
        }

        return () => window.removeEventListener('mousemove', resize);

    }, [resizeable]);
    
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

                <div className="flex flex-row items-center bg-zinc-800 py-1 space-x-1 px-1">
                    <ChevronDownIcon/>
                    <span className="text-gray-300 font-bold text-xs">OPEN EDITORS</span>
                </div>

                <div className="flex flex-row items-center bg-zinc-800 py-1 space-x-1 px-1">
                    <ChevronDownIcon/>
                    <span className="text-gray-300 font-bold text-xs">PORTFOLIO</span>
                </div>

            </div>
            {/* resizer */}
            <div 
                className={`w-1 cursor-col-resize hover:bg-gray-500 ${show ? '' : 'hidden'}`}
                onMouseDown={ () => setResizeable(true) }
                onMouseUp={ () => setResizeable(false) }
            />
        </>
    )
}

export default NavBar;