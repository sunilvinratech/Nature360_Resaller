import  React from "react"
import BenefitsCard from "./BenefitsCard";
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
const Benefits=()=>{
    return <>
        <div className="w-full h-auto  bg-[#fffff] flex ">
            <div className="w-[60%] min-h-[40rem] mx-auto  mt-auto flex flex-col items-center justify-between ">
                <h3 className="text-[45px] mt-[60px] text-gray-900">Key Benefits Of Enzyme 360</h3>
                <div className="w-full flex items-center justify-around gap-24 flex-wrap mb-10">
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                    <BenefitsCard/>
                </div>
                <button className="btn1 mb-4"> <SpaOutlinedIcon style={{color:"#ffffff"}} />Learn More</button>
            </div>
        </div>
    </>
}
export default Benefits;