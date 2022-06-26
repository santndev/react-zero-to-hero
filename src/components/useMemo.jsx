import React, {useMemo, useState} from "react";

export const MeMoDemo = () => {
    const plusFive = (num) => {
        console.log("i was called!");
        return num + 5;
    };
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    // const numPlusFive = plusFive(num);
    const numPlusFive = useMemo(() => plusFive(num), [num]);
    return (
        <div className={light ? "bg-light" : "bg-black"}>
            <div>
                <h1>Without useMemo</h1>
                <h2>
                    Current number: {num}, Plus five: {numPlusFive}
                </h2>
                <div className="button-container">
                    <button
                        onClick={() => {
                            setNum(num + 1);
                        }}
                    >
                        Update Number{" "}
                    </button>
                    <button
                        onClick={() => {
                            setLight(!light);
                        }}
                    >
                        {" "}
                        Toggle the light{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};
