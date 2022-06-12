import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
const Sidebar = () => {
  return (
    <>
      <div className="ml-auto  w-52 min-h-[60vh]">
        <div className="shadow-xl border-[.5px] border-gray-300 rounded-lg shadow-inner w-52 min-h-[60vh] mt-20">
          {/* filter heading  */}
          <h3 className="w-full flex items-center justify-between text-[20px] px-[6px] py-2 border-b-[.5px] border-gray-400 mb-3 ">
            Filter{" "}
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </h3>
          <details
            className="w-full flex items-center justify-between  px-[6px] py-2"
            open
          >
            <summary className="font-semibold">Category1</summary>
            <ul className="text-[15px] pl-[18px] my-[2px] text-blue-900">
              <li>
                <Link to={"#"}>Sub Category1</Link>
              </li>
              <li>
                <Link to={"#"}>Sub Category1</Link>
              </li>{" "}
              <li>
                <Link to={"#"}>Sub Category1</Link>
              </li>{" "}
              <li>
                <Link to={"#"}>Sub Category1</Link>
              </li>
            </ul>
          </details>
          <div className="pl-[18px] ">
            <h3 className="font-semibold">Category2</h3>
            <h3 className="font-semibold">Category2</h3>
            <h3 className="font-semibold">Category2</h3>
            <h3 className="font-semibold">Category2</h3>
            <h3 className="font-semibold">Category2</h3>
          </div>
          <div className="pl-[18px] mt-5">
              <h6 className="font-semibold mb-5">Price</h6>
               <h6> &lt; $100 </h6>
               <h6> $100-$200 </h6>
               <h6> $200-$300 </h6>
               <h6> $400-$500 </h6>
               <h6> &gt; $500 </h6>
         

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
