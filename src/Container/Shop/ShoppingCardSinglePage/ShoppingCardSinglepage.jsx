import React from "react";
import Product from "./Asset/p1.jpg";
import Review from "./Review/Review";
const ShoppingCardSinglepage = () => {
  return (
    <>
      <div className="flex gap-20 overflow-y-scroll scrollbar-hide">
        <div className="">
          <img
            src={Product}
            alt="ProductImage"
            width={"350px"}
            height={"400px"}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          {/* Top fileds   */}
          <div className="flex flex-col mb-4">
            <h3 className="text-gray-600">#9305766334</h3>
            <h3 className="text-gray-900 font-[500] text-[30px]">
              Magane new tech post
            </h3>
            <h3>
              <span className="text-2xl font-semibold mx-1">$33</span>
              <span className="text-[20px] font-semibold mx-1 text-gray-500 line-through">
                $15
              </span>
              <span className="text-[15px] font-semibold mr-1 ml-1  text-green-500 line-through">
                39%
              </span>
              Off
            </h3>
          </div>
          <div className="flex flex-col items-start gap-1 mb-4 ">
            <h3 className="text-gray-900 font-semibold">Qty</h3>
            <select className="px-3 py-1 border-[.2px] border-gray-300 outline-0 shadow-sm">
              <option defaultValue>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <h3 className=" text-gray-900 font-semibold">Colors</h3>
            <div className="flex gap-3 items-center">
              <div className="w-[70px] bg-green-500 h-[30px]"></div>
              <div className="w-[70px] bg-yellow-500 h-[30px]"></div>
              <div className="w-[70px] bg-violet-500 h-[30px]"></div>
              <div className="w-[70px] bg-red-500 h-[30px]"></div>
            </div>
            <div className="max-w-[50%] mb-3">
              <h3 className="text-gray-900 font-semibold mb-1">Description:</h3>
              <div className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem.
              </div>
            </div>
            <div className="mb-4">
              <button className="bg-gray-900 px-3 py-1 text-white font-semibold">
                Add to Cart
              </button>
            </div>
            {/* Reviwe Start  */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3">Reviews</h3>
              <Review />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCardSinglepage;
