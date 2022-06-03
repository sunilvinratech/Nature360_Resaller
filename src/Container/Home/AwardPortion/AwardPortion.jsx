import React from "react"
import "./Award.css"
import AwardImage from "./AwardAsset/Award.png"
const Award=()=>{
    return <>
    <div className="w-[70%] mx-auto h-[20vh] flex items-center justify-center object-cover award hidden sm:block py-2">
      <img src={AwardImage}  alt={"award"} className="mx-auto hidden sm:block" />
    </div>
    </>
}
export default Award;