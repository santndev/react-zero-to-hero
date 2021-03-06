import React, {useCallback, useEffect, useState} from "react";

export default function Cau2() {
    const [userText, setUserText] = useState("");

    const handleOneKey = (event) => {
        const {key, keyCode} = event;
        console.log(keyCode);
        if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
            console.log(`${userText}${key}`, `${userText}${key}`.length);
            setUserText(`${userText}${key}`);
        }
        if (keyCode === 8) {
            setUserText(`${userText.slice(0, -1)}`);
        }
    };

    const handlerUserKeyPress = useCallback(event => {
        handleOneKey(event);
    }, [userText]);

    // const handlerUserKeyPress = event => {
    //     handleOneKey(event)
    // }
    useEffect(() => {
        window.addEventListener("keydown", handlerUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handlerUserKeyPress);
        };
    });


    return (
        <div>
            <h1> Typing here: </h1>
            <blockquote>{userText}</blockquote>
        </div>
    );
}
