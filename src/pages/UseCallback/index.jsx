import {memo, useCallback, useState} from 'react'

const storeSet = new Set();
const Wrap = () => {
    const Checkbox = memo(({value, onClick}) => {
        return (
            <>
                <div style={{cursor: 'pointer'}} onClick={onClick}>
                    {value ? '☑' : '□'}
                </div>
            </>
        );
    });
    console.log('render')
    const [isChecked, setIsChecked] = useState(false);
    const toggleChecked = useCallback(() => {
        setIsChecked(!isChecked)
    }, [isChecked]);
    // const toggleChecked = () => setIsChecked(!isChecked)

    return <Checkbox value={isChecked} onClick={toggleChecked}/>;
};
function UseCallback() {

    const [text, setText] = useState('');
    storeSet.add(Wrap);
    console.log(storeSet);
    return (
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <Wrap/>
        </>
    );
}


export default UseCallback

// function UseCallback() {
//     const [count, setCount] = useState(0);
//     const [countOther, setCountOther] = useState(0);
//
//     // const increase = () => setCount(count + 1);
//     // const decrease = () => setCount(count - 1);
//     // const increaseOther = () => setCountOther(countOther + 1);
//     // const decreaseOther = () => setCountOther(countOther + 1);
//     const increase = useCallback(() => setCount(count + 1), [count]);
//     const decrease = useCallback(() => setCount(count - 1), [count]);
//     const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
//     const decreaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
//
//     storeSet.add(increase);
//     storeSet.add(decrease);
//     storeSet.add(increaseOther);
//     storeSet.add(decreaseOther);
//
//     console.log(storeSet);
//
//     return (
//         <>
//             <div>Count: {count}</div>
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//
//             <div>Count other: {countOther}</div>
//             <button onClick={increaseOther}>+</button>
//             <button onClick={decreaseOther}>-</button>
//         </>
//     )
// }
//
// export default UseCallback;
