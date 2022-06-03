import React from "react"
import Logo from "./AboutAsset/logo.png"
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
const About=()=>{
    return <>
        <div className="w-full h-auto sm:min-h-[27rem] bg-[#faf6eb]">
            <div className='w-[75%] py-[30px] h-full mx-auto flex items-center'>
                <div className="self-start flex-1">
                   <div className="self-baseline mx-w-1/2">
                       <h3 className="text-[50px] mb-0 text-gray-900">
                           About NATURE 360
                       </h3>
                       <h4 className="text-4xl mb-9 text-gray-700 mb-2">
                           Brand Story
                       </h4>
                   </div>
                    <p className="text-left text-lg mb-4">The broad and fertile land nurtures a magnificent tree. This tree
                        inspired the founders to open the door to their vision of good health.
                        We wish all the best of health and hope to bring across
                        the concept of good health to the world. May the user lead a healthy and active lifestyle!</p>
                    <button className="btn1"><SpaOutlinedIcon style={{color:"#ffffff"}}/> Learn More</button>
                </div>
                <div className="flex-1 h-full grid place-items-center ">
                <img src={Logo} alt={"Logo"} className=" sm:w-2/4 "/>
                </div>

            </div>
        </div>
    </>
}
export default About;