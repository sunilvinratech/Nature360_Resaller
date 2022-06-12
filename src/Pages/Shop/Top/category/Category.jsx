import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Category = ({ state }) => {
  return (
    <div
      active={state}
      className="absolute w-[30%] min-h-[300px] backdrop-blur-sm mt-[2px] bg-gray-100 border-[.5px] border-gray-300 z-20 right-20 shadow-sm rounded-sm "
    >
      <div className=" flex ml-[25%] gap-4 center ">
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>{" "}
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>{" "}
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
