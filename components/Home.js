'use client';
import { useMemo, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TabBar from "./TabBar";
import useDeviceDetect from "@/hooks/useDeviceDetect";

const Initial = () => {

    const sideBarWidth = 48;
    const { deviceWidth } = useDeviceDetect();
    const [navBarWidth, setNavBarWidth] = useState(180);

    const [showNavBar, setShowNavBar] = useState(true);

    //computed
    const outletWidth = useMemo( () => {
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

                <div className="flex flex-1 flex-col bg-cyan-300" style={{
                    maxWidth: outletWidth
                }}>
                    
                    <TabBar/>

                    <div className="flex-1 bg-yellow-300 break-words">
                        jfdffdfkjdfkldkfjdfjfdffdfkjdfkldkfjdfjfdfdfdjfdffdfkjdfkldkfjdfjfdffdfkjdfkldkfjdfjfdfdfdjfdffdfkjdfkldkfjdfjfdffdfkjdfkldkfjdfjfdfdfd
                    </div>
                </div>
            </div>

            <div className="bg-red-300">
                fdf
            </div>
        </div>
    );
}

export default Initial;
