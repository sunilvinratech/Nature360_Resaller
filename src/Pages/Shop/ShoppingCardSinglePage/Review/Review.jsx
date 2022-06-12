import React from "react";
import { Avatar, Rating } from "@mui/material";
const Review = () => {
  return (
    <div>
      <div>
        <div className="flex items- gap-2">
          <Avatar src="data:image/jpeg;base64,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" />
          <div className="flex flex-col items-baseline ">
            <em>
              <p>divya@gmail.com</p>
            </em>
            <Rating precision={.5} size="small" color="primary"/>
            <p className="font-semibold text-gray-400">12-10-2002</p>
            <p className="max-w-[350px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, non! Harum sint odio quasi impedit facilis quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;