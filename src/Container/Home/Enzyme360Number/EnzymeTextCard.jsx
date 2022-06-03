import React from "react"
const EnzymeTextCard=(props)=>{
    return <>
    <div className="flex flex-col items-center justify-around w-[150px] gap-2 mb-4">
        <h2 className='text-[39px]  text-gray-700'>
            {props.number}
        </h2>
        <p className="text-center text-[1.1rem]">
            {props.text}
        </p>
    </div>
    </>
}
export default EnzymeTextCard;