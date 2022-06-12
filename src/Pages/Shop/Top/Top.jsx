import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import Logo from "./asset/logo.png";
import CategoryIcon from "@mui/icons-material/Category";
import { Avatar, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard/ProfileCard";
import Category from "./category/Category";
const Top = () => {
  const [profileCard, setProfileCard] = useState("false");
  const [category, setcategorycard] = useState("false");
  const Navigate = useNavigate();

  const handleClickprofile = () => {
    setProfileCard(profileCard === "false" ? "true" : "false");
  };
  const handleClickCategory = () => {
    setcategorycard(category === "false" ? "true" : "false");
  };
  console.log(profileCard.profile, profileCard.category);
  return (
    <div className="w-ful border-b-[.5px] border-gray-300 relative">
      <div className="w-full h-22  flex items-center justify-around ">
        <div>
          <img
            src={Logo}
            alt="logo"
            width="75px"
            height="75px"
            onClick={() => Navigate("/")}
          />
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
            <IconButton onClick={handleClickCategory}>
              <CategoryIcon />
            </IconButton>
            Categories
          </span>
          <div className="flex items-center gap-2">
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleClickprofile}>
              <Avatar>
                <img src={Logo} />
              </Avatar>
            </IconButton>
          </div>
        </div>
      </div>
      <ProfileCard state={profileCard} />
      <Category state={category} />
    </div>
  );
};

export default Top;
