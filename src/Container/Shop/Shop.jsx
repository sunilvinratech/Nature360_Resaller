import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Top from "./Top/Top";

const Shop = () => {
  console.log(localStorage.getItem('token'))
  return (
    <div className="w-full">
      <Top />
      <div className="w-full flex">
        <div className="flex-[.125] flex">
          <Sidebar />
        </div>
        <div className="flex-[.875] flex">
          <div className="w-[80%] mt-10 mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
