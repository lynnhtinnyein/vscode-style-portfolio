import { useEffect, useState } from "react";

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0
    });

    const handleResize = () => {

        setDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        setIsMobile(window.innerWidth <= 992);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { 
        isMobile, 
        deviceWidth: dimension.width,
        deviceHeight: dimension.height 
    };
};

export default useDeviceDetect;