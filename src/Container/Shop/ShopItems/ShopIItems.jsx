import React from "react";
import ShopCard from "../ShopCard/ShopCard";
import Product2 from "../ShopCard/Asset/p2.jpg"
import Product1 from "../ShopCard/Asset/p1.jpg"
const ShopIItems = () => {
  return (
    <div className="w-full flex gap-10">
      <ShopCard image={Product1} />
      <ShopCard image={Product2} />
    </div>
  );
};

export default ShopIItems;
