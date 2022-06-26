import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
// import {checkToken} from '@helpers'

export const Main = () => {

    useEffect(() => {
        // if (checkToken()) {
        //     navigate('/')
        // }
    }, []);

    return (
        <div>
            <Outlet/>
        </div>
    );
};
