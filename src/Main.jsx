import React from "react"
import Navbar from "./Container/Navbar/Navbar";
import {Outlet} from "react-router-dom"
const Main=()=>{
    return <>
    <div className="w-full">
        <Navbar/>
        <div className="w-full">
        <Outlet/>
        </div>

    </div>

    </>
};
export  default  Main;
