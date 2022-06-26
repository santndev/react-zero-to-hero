import React from "react";
import Login from "../pages/Login";
import UseCallback from "../pages/UseCallback";
import UseReducer from "../pages/UseReducer";
import TuringPage from "../pages/TuringPage";

export const main = [
    {path: "/login", component: <Login/>, label:"Login"},
    {path: "/reducer", component: <UseReducer/>, label:"UseReducer"},
    {path: "/callback", component: <UseCallback/>, label:"UseCallback"},
    {path: "/turing", component: <TuringPage/>, label:"TuringPage"}
];

export default main;

