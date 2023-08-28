'use client';
import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TabBar from "./TabBar";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { pages } from "@/data/pages";
import { useGlobalContext } from "@/context/GlobalContext";
import Footer from "./Footer";
import NoOpenPage from "./pages/NoOpenPage";
import Projects from "./pages/Projects";

const Home = () => {

    const { activePage } = useGlobalContext();
    const sideBarWidth = 48;
    const { deviceWidth } = useDeviceDetect();
    const [navBarWidth, setNavBarWidth] = useState(180);
    const [showNavBar, setShowNavBar] = useState(true);

    //computed
    const outletMaxWidth = useMemo( () => {
        return deviceWidth - (sideBarWidth + navBarWidth);
    }, [deviceWidth, navBarWidth]);

    return (
        <div className="flex flex-col h-screen w-screen">

            <Header/>

            <div className="flex flex-1 flex-row">

                <SideBar 
                    onToggleNavBar={setShowNavBar}
                />

                <NavBar 
                    show={showNavBar} 
                    onResize={setNavBarWidth} 
                />

                <div 
                    className="flex flex-1 flex-col bg-zinc-800" 
                    style={{
                        maxWidth: outletMaxWidth,
                    }}
                >
                
                    <TabBar/>
                    
                        {/* pages.find( e => e.id === activePage )
                        ? pages.find( e => e.id === activePage ).component 
                        : <NoOpenPage/> */}
                        <Projects/>
                    

                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default Home;
