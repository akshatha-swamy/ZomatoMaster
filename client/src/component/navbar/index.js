import {React,useState,useEffect} from "react";

import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow,BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import  {jwtDecode} from "jwt-decode"
import { Link } from "react-router-dom";





const NavLg=()=>{

    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location="/"
    }

    const[userdata,setUserdata]=useState({});

    const getUser=async()=>{
        try{
           // const response=await axios.get("http://localhost:4000/auth/login/success",{withCredentials:true});
            //console.log("response",response)
            const token=localStorage.getItem("token")
            const decode=jwtDecode(token);
            setUserdata(decode);
            
        }

        catch{

        }
    }
    console.log("decode token",userdata?.user?.fullname)
    const name=userdata?.user?.fullname

    useEffect(()=>{
        getUser()
    },[])

    const [showNav, setShowNav] = useState(false); // State to manage visibility of the side navbar

    const toggleNav = () => {
        setShowNav(!showNav); // Toggle the state when the hamburger menu is clicked
    };
    
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

            {name ? ( // If user is logged in
                        <div>
                            <button className="flex items-center" onClick={toggleNav}>
                                <FaUserCircle className="w-8 h-8" style={{color:"#a3b9db"}}/>  
                                <h1 className="text-xl p-2 text-center text-navbar-300">{name}</h1>
                                <BiChevronDown/>
                                
                            </button>
                            {showNav && (
                <div className="absolute w-36 h-auto top-18  right-5 z-10  bg-white rounded-lg shadow-lg ">
                
                    {/* Your side navbar content goes here */}
                    <ul className="flex flex-col ">
                        <button className="h-auto w-full py-2 ps-2 text-md text-navbar-300 hover:bg-navbar-200 ">Profile</button>
                        <button className="h-auto w-full py-2 text-md   text-navbar-300 hover:bg-navbar-200">Notifications</button>
                        <button className="h-auto w-full py-2 text-md  text-navbar-300 hover:bg-navbar-200">BookMarks</button>
                        <button className="h-auto w-full py-2 text-md   text-navbar-300 hover:bg-navbar-200">Reviews</button>
                        <button className="h-auto w-full py-2 text-md   text-navbar-300 hover:bg-navbar-200">Settings</button>
                        <button className="h-auto w-full py-2 text-md   text-navbar-300 hover:bg-navbar-200 " onClick={handleLogout}>Logout</button>
                        
                    </ul>
                </div>
                    
                
            )}

                        </div>
                            
                        ) : ( // If user is not logged in
                            <Link to="/signin"><button className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-3 text-center text-white">LOGIN</button></Link>
             )}
            
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
            <button>LOG OUT</button>
            <BiChevronDown/>
            </div>
            </div>
            </div>
        </div>
        


        </>
    )
};

const NavSm=()=>{
    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location="/"
    }

    const[userdata,setUserdata]=useState({});

    const getUser=async()=>{
        try{
           // const response=await axios.get("http://localhost:4000/auth/login/success",{withCredentials:true});
            //console.log("response",response)
            const token=localStorage.getItem("token")
            const decode=jwtDecode(token);
            setUserdata(decode);
            
        }

        catch{

        }
    }
    console.log("decode token",userdata?.user?.fullname)
    const name=userdata?.user?.fullname

    useEffect(()=>{
        getUser()
    },[])

    const [showNav, setShowNav] = useState(false); // State to manage visibility of the side navbar

    const toggleNav = () => {
        setShowNav(!showNav); // Toggle the state when the hamburger menu is clicked
    };
    return(
        <>
        <div className=" relative w-full flex justify-between items-center px-5 py-2 ">
            <div>
                <GiHamburgerMenu  className="w-8 h-8" onClick={toggleNav}/>
            </div> {showNav && (
                <div className="absolute w-2/5 h-full top-20 left-0 z-10 w-64 h-full bg-white text-navbar-300">
                    {/* Your side navbar content goes here */}
                    <ul>
                        <li>
                        <div className="flex gap-2 items-center">
                        <FaUserCircle className="w-8 h-8 py-2" style={{color:"#a3b9db"}}/>
                        <h1 className="h-8 w-full py-2 text-lg text-navbar-300" >
                                {
                                    name && name
                                }
                            </h1>
                        </div>
                            
                        </li>
                        <li className="h-8 w-full py-2 text-lg  px-auto text-navbar-300">Profile</li>
                        <li className="h-8 w-full py-2 text-lg  px-auto  text-navbar-300">Notifications</li>
                        <li className="h-8 w-full py-2 text-lg  px-auto  text-navbar-300">BookMarks</li>
                        <li className="h-8 w-full py-2 text-lg  px-auto  text-navbar-300">Reviews</li>
                        <li className="h-8 w-full py-2 text-lg  px-auto  text-navbar-300">Settings</li>
                        <button className="h-8 w-full py-2 text-lg  px-auto  text-navbar-300" onClick={handleLogout}>Logout</button>
                        
                    </ul>
                </div>
            )}


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