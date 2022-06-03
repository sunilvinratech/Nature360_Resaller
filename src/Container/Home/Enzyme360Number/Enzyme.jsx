import  React from "react"
import EnzymeTextCard from "./EnzymeTextCard";
const Enzyme=()=>{
    return <>
     <div className="w-full h-[27rem] bg-slate-100 flex ">
         <div className="w-[60%] h-[22rem] mx-auto  mt-auto flex flex-col items-center justify-between ">
           <h3 className="text-[45px] text-gray-900">Enzyme 360 In Numbers</h3>
             <div className="w-full flex items-center justify-around flex-wrap">
                 <EnzymeTextCard number={"225"} text={"Types of Fruits and Vegetables"}/>
                 <EnzymeTextCard number={"18"} text={"Fermentation Strains"}/>
                 <EnzymeTextCard number={"7"} text={"Precious Herbs"}/>
                 <EnzymeTextCard number={"3 - 5"} text={"Years of Fermentation"}/>
             </div>
         </div>
     </div>
    </>
}
export default Enzyme;