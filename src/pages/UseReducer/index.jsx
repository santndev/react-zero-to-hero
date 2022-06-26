import React, {useReducer, useState} from "react";
import {
    FormLabel,
} from "react-bootstrap";

function TodoList() {
    const [countNo, setCountNo] = useState(10);
    const helloFnc = (state, actionKey) => {
        switch (actionKey) {
            case "INCREMENT":
                return setCountNo(countNo + 1);
            case "DECREMENT":
                return setCountNo(countNo - 1);
            default:
                throw new Error();
        }
    };
    let state, dispatch;
    // eslint-disable-next-line no-unused-vars
    [state, dispatch] = useReducer(helloFnc, countNo);
    console.log(state);
    return (
        <>
            <FormLabel>
                {countNo}
            </FormLabel>
            <div>
                <button onClick={() => dispatch("DECREMENT")}> -</button>
                <button onClick={() => dispatch("INCREMENT")}> +</button>
            </div>
        </>
    );
}

export default TodoList;
