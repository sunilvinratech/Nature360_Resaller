import React from "react";
const BennefitCard=()=>{
    return <>
    <div className="w-[175px] flex items-center flex-col justify-center">
     <div className="w-[85px] bg-gray-200 shadow-inner shadow-lg rounded-full aspect-square grid place-items-center ">
         <span className='text-2xl font-bold text-[#DBB060]'>
             1
         </span>
     </div>
        <div className='w-full flex mt-2 flex-col items-center'>
            <h3 className='text-black font-bold'>Skin Benefits</h3>
            <p className='text-center'>Cell Renewal
                Prevents
                Damage From UV Rays</p>
        </div>
    </div>

    </>
}
export default BennefitCard;