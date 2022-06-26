// lean props and state
import React, {useEffect, useState} from "react";
// use props and state also
// export default function Clock() {
//     const ClockDesign = (thisIsProps) => {
//         return (
//             <div className={"alert alert-primary"}>
//                 <h2>It is {thisIsProps.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
//     const [thisIsState, setThisIsState] = useState(new Date());
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setThisIsState(() => new Date());
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);
//     return <ClockDesign date={thisIsState}/>
// }

// only use state
export default function Clock() {
    let [thisIsState, setThisIsState] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(
            () => {
                setThisIsState(new Date());
            }, 1000);
        return function cleanup() {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h2>It is {thisIsState.toLocaleTimeString()}.</h2>
        </div>
    );
}
