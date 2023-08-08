import { useEffect, useState } from "react";

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(1000);

    const handleResize = () => {

        setDeviceWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 992);
    }

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile, deviceWidth };
};

export default useDeviceDetect;