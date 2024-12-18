import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState(1024);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};
    