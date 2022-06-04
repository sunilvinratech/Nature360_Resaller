import React from "react";
import Product from "./Asset/p1.jpg";
const ShopCard = ({image}) => {
  return (
    <>
      <div className="w-[200px]">
        <img
          src={image}
          alt="product"
          className="w-[200px] h-[250px] object-cover drop-shadow-lg "
        />

        <div className="w-full">
          <div>
            <h3 className="font-semibold">Golden Enzyme 360</h3>
            <div className="flex gap-2 items-end">
              <h2 className="font-semibold text-lg">$35</h2>
              <span className="text-[12px] line-through font-extrabold text-gray-300">$100</span>
              <h3 className="text-[15px] text-green-500 font-bold">
                39%<span className="font-bold text-gray-900 ml-1 text-[12px]">off</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
