import { useEffect, useState } from "react";

interface Dimension {
    width: number;
    height: number;
}

const useDimensions = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [dimension, setDimension] = useState<Dimension>({
        width: 0,
        height: 0,
    });

    const handleResize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        setIsMobile(window.innerWidth <= 992);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        ...dimension,
        isMobile
    };
};

export default useDimensions;
