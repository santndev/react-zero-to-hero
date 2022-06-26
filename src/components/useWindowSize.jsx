import {useEffect, useState} from "react";

export function useWindowSize() {
    console.log("here");
    const [windowSize, setWindowSize] = useState({
        width: 0, height: 0
    });
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth, height: window.innerHeight
        });
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);
    return windowSize;
}
