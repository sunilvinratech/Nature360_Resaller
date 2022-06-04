import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
const ProfileCard = ({state}) => {
  return (
    <>
      <div active={state} className="w-40 mt-[2px] bg-gray-100 border-[.5px] border-gray-300 z-30 rounded-sm shadow-sm transition-all  absolute right-[150px]">
        <ul className="uppercase ml-6 mb-5 mt-4 flex flex-col gap-2 font-semibold">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/order">My order</Link>
          </li>
          <li>
            <Link to="/wishList">WishList</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileCard;
