import React from "react";
import "./Image.css"
const ImagePortion=()=>{
    return <>
      <div className="w-full ImagePortionImage">
          <div className="w-[80%] mx-auto h-full flex items-baseline justify-center gap-3.5 flex-col">
              <div className="w-auto px-[20px] flex flex-col
              ">
                  <h3 className="text-5xl text-[#fff] mb-1.5">
                      NATURE 360
                  </h3>
                  <h3 className="text-2xl text-[#fff]">
                      Enzyme 360
                  </h3>
                  <p className='text-[#fff] text-xl'>360 represents complete wisdom, nature <span className="text-amber-400" >represent sthe return to nature.</span></p>
              </div>
              <div>
                  <button className="btn2">Shop Now</button>
                  <button className="btn1"> Learn More</button>
              </div>


          </div>
      </div>
    </>
}
export default ImagePortion;