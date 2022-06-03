import React from "react"
import {IconButton} from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "./Navbar Asset/n360logo.png"
import SearchIcon from '@mui/icons-material/Search';
import {Link, NavLink,useNavigate} from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
const Navbar = () => {
    const Navigate=useNavigate();
    const handleLoginNavigation=()=>{
        Navigate("login")
    }
    return <>
        <div className="w-full flex flex-col">
            {/*Navbar Top */}
            <div className=" mx-auto w-full h-[75px] bg-gray-900 flex items-center justify-around">
                <div className="w-full  flex mx-auto justify-around">
                    <div className="flex items-center">
                        <IconButton><FacebookOutlinedIcon style={{color: "#DAAF60", fontSize: "20px"}}/></IconButton>
                        <IconButton><InstagramIcon style={{color: "#DAAF60", fontSize: "20px"}}/></IconButton>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h3 style={{color: "#fff", fontSize: "13px"}} className="font-semibold">LANGUAGE</h3>
                        <span className="h-[50px] w-[2px] bg-white"></span>
                        <select className="form-control border-0 outline-0 bg-gray-900 text-[#DAAF60]">
                            <option value="English">English</option>
                            <option value="中国人">
                                中国人
                            </option>
                        </select>
                    </div>
                </div>
                <div>

                </div>
            </div>
            {/*Navbar Bottom */}
            <div className=" mx-auto w-full h-[75px] bg-gray-50 flex items-center justify-evenly">
                <div className="h-full">
                    <Link to="/"> <img src={logo} alt="Logo" className="w-[70px] aspect-square object-cover"/></Link>
                </div>
                <ul className="flex uppercase font-semibold gap-5 text-[16px]">
                    <li>
                        <NavLink to={"#"}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"#"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"#"}>Education</NavLink>
                    </li>
                    <li>
                        <NavLink to={"#"}>Media</NavLink>
                    </li>
                    <li>
                        <NavLink to={"#"}>Partnership</NavLink>
                    </li>
                    <li>
                        <NavLink to={"#"}>contact</NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-2.5">
                    <IconButton > <SearchIcon/></IconButton>
                    <IconButton onClick={handleLoginNavigation}> <PersonOutlineRoundedIcon/></IconButton>
                   <IconButton><LocalMallOutlinedIcon/></IconButton>
                </div>

            </div>
        </div>
    </>
}
export default Navbar;