import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow,BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const NavLg=()=>{
    return(
        <>
        <div className="mx-9 px-5 w-full">
        <div className="flex gap-5 justify-center">
        
            <div className="w-44">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="py-6 w-full" />
            </div>

            <div className="py-3 flex gap-10 justify-between w-5/6">
            <div className="w-full h-16 flex items-center bg-white gap-4 px-2 mx-2 py-4 rounded-md shadow-md">
            <div className="flex items-center gap-3">
                <FaLocationDot className="h-8" style={{ color: "#f58995" }} />
                <input
                type="search"
                className="flex-grow focus:outline-none text-md w-32"
                placeholder="City"
                />
                <BiSolidDownArrow className="w-4 h-4" style={{ color: "#999999" }} />
            </div>

            <div className="flex items-center gap-3 w-full">
                <CiSearch className="w-8 h-8" style={{ color: "#999999" }} />
                <input
                type="search"
                className="flex-grow focus:outline-none text-md w-72"
                placeholder="Search for Restaurants,cuisine or a dish"
                />
            </div>
            </div>


            <div className="flex items-center gap-2">
            <FaUserCircle className="w-8 h-8" style={{color:"#a3b9db"}}/>
            <h1 className="text-md">Akshatha</h1>
            <BiChevronDown/>
            </div>
            </div>
            </div>
        </div>
        

        </>
    )
};

const NavMd=()=>{
    return(
        <>
        <div className="mx-2 px-2 w-full">
        <div className="flex gap-3 justify-center">
        
            <div className="w-32">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="py-6 w-full" />
            </div>

            <div className="py-3 flex gap-5 justify-between items-center">
            <div className="w-full h-8 flex items-center bg-white gap-4 px-2 mx-2 py-2 rounded-md shadow-md">
            <div className="flex items-center gap-3">
                <FaLocationDot className="h-4" style={{ color: "#f58995" }} />
                <input
                type="search"
                className="flex-grow focus:outline-none text-sm w-32"
                placeholder="City"
                />
                <BiSolidDownArrow className="w-4 h-4" style={{ color: "#999999" }} />
            </div>

            <div className="flex items-center gap-3 w-full">
                <CiSearch className="w-4 h-4" style={{ color: "#999999" }} />
                <input
                type="search"
                className="flex-grow focus:outline-none text-sm w-72"
                placeholder="Search for Restaurants,cuisine or a dish"
                />
            </div>
            </div>


            <div className="flex items-center gap-1">
            <FaUserCircle className="w-4 h-4" style={{color:"#a3b9db"}}/>
            <h1 className="text-sm">Akshatha</h1>
            <BiChevronDown/>
            </div>
            </div>
            </div>
        </div>
        


        </>
    )
};

const NavSm=()=>{
    return(
        <>
        <div className="w-full flex justify-between items-center px-5 py-2 ">
            <div>
                <GiHamburgerMenu  className="w-8 h-8"/>
            </div>

            <div className="w-32">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="py-6 w-full" />
            </div>
        </div>

        </>
    )

};


const NavBar=()=>{
    return(
        <>
             <nav>
                <div className="md:hidden">
                {
                    <NavSm/>
                }
                </div>

                <div className="hidden lg:hidden md:flex">
                {
                    <NavMd/>
                }
                </div>

                <div className="hidden lg:flex">
                {
                    <NavLg/>
                }
                </div>
            </nav>
        </>
    )
}
export default NavBar;