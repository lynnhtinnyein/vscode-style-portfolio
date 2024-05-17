import Explorer from "@/components/Explorer/Explorer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActivityBar from "@/components/ActivityBar/ActivityBar";
import { usePages } from "@/context/pages";
import { useEffect, useState } from "react";
import useDeviceDetection from "@/hooks/useDeviceDetection";
import TabBar from "@/components/TabBar/TabBar";
import { pages } from "@/data/pages";
import NoOpenPage from "@/outlets/NoOpenPage";

const Home = () => {
    const { activePage } = usePages();
    const { isMobile } = useDeviceDetection();
    const [showExplorer, setShowExplorer] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        setShowExplorer(!isMobile);
    }, [isMobile]);

    return (
        <div className={ isDarkMode ? 'dark' : '' }>
            <div className="flex flex-col w-screen h-screen dark:text-gray-300 dark:bg-zinc-900">
                <Header />

                {/* body */}
                <div className="flex flex-row flex-1 overflow-hidden">
                    {/* left section */}
                    <ActivityBar
                        showExplorer={showExplorer}
                        setShowExplorer={setShowExplorer}
                        isDarkMode={isDarkMode}
                        setIsDarkMode={setIsDarkMode}
                    />

                    {showExplorer ? <Explorer /> : ""}

                    {/* right section */}
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <TabBar />
                        <div className="flex flex-1 bg-zinc-800 overflow-hidden">
                            {pages.find((e) => e.id === activePage) ? (
                                pages.find((e) => e.id === activePage).component
                            ) : (
                                <NoOpenPage />
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;
