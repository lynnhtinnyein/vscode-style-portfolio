'use client';
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import XIcon from "@/icons/vs_code_icons/XIcon";
import { pages } from "@/data/pages";

const Home = () => {

    const sideBarWidth = 50;
    const [windowWidth, setWindowWidth] = useState(1500);
    const [navBarWidth, setNavBarWidth] = useState(180);

    const [showNavBar, setShowNavBar] = useState(true);
    const [openedPages, setOpenedPages] = useState([1]);
    const [activePageId, setActivePageId] = useState(1);

    //mounted
    useEffect(() => {
        changeWindowSize();
        window.addEventListener('resize', changeWindowSize);
    
        return () => {
            window.removeEventListener('resize', changeWindowSize);
        };
    }, []);

    const tabBarWidth = useMemo( () => {
        return windowWidth - (sideBarWidth + navBarWidth);
    }, [windowWidth, navBarWidth]);

    //methods
    const changeWindowSize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handlePageChange = (id) => {
        setOpenedPages( prevPages => {
            return !prevPages.includes(id)
            ? [...prevPages, id]
            : prevPages
        })
        setActivePageId(id);
    }

    const closePage = (id) => {
        setOpenedPages( prevPages => {

            if(activePageId === id ){
                const lastOpenPage = prevPages[prevPages.length - 1];
                setActivePageId(lastOpenPage)
            }            
            
            return prevPages.filter( e => e !== id )
        });
    }
    
    return (
        <div className="flex flex-col h-screen bg-zinc-800">

            <Header/>

            <div className="flex flex-row flex-1">

                <SideBar  
                    onPageChange={handlePageChange}
                    onToggleNavBar={setShowNavBar}
                />

                <NavBar 
                    show={showNavBar}
                    onResize={setNavBarWidth}
                />

                {/* outlet */}
                <div className="flex-1 bg-zinc-800">

                    {/* tab_bar */}
                    <div className="flex flex-1 flex-row bg-zinc-900 items-center overflow-x-auto"
                        style={{
                            maxWidth: tabBarWidth
                        }}
                    >
                        { openedPages.map( id => 
                            <div 
                                key={id}
                                className={`flex flex-row pr-3 items-center space-x-2 border-r border-r-zinc-900 ${ activePageId === id ? 'bg-zinc-800' : 'bg-zinc-700'}`}
                            >
                                <div 
                                    className="flex flex-row space-x-2 py-2 pl-3"
                                    onClick={ () => setActivePageId(id) }
                                >
                                    { pages.find( e => e.id === id ).fileIcon }

                                    <span className="text-yellow-200 text-xs">
                                        {pages.find( e => e.id === id ).name}
                                    </span>
                                </div>
                                
                                <div 
                                    className="hover:bg-gray-500 rounded"
                                    onClick={ () => closePage(id) }
                                >
                                    <XIcon size="14"/>
                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </div>

            <div className="flex flex-row justify-between">
                <span>footer</span>
            </div>
        </div>
    );
}

export default Home;
