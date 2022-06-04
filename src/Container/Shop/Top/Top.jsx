import { Search } from "@mui/icons-material";
import React from "react";
// import Logo from "../Asset/logo.png";
import CategoryIcon from "@mui/icons-material/Category";
import { Avatar, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
const Top = () => {
  const Navigate=useNavigate();
  return (
    <div className="w-ful border-b-[.5px] border-gray-300 ">
      <div className="w-full h-24  flex items-center justify-around ">
        <div>
          <img src={""} alt="logo" width="75px" height="75px" onClick={()=>Navigate('/')} />
        </div>
        <div className="flex items-center border border-gray-400 rounded-3xl p-[4.6px]">
          <input
            type="text"
            placeholder="Search"
            className="p-[2.5px] border-0 outline-0 "
          />
          <Search siiz />
        </div>
        <div className="flex items-center gap-10">
          <span className="text-sm font-semibold">
            <IconButton>
              <CategoryIcon />
            </IconButton>
            Categories
          </span>
          <div className="flex items-center gap-2">
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Avatar>
              <img src={""} />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
