import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignInPage=()=>{
    return(
        <>
        <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="login image" className="w-full h-full"/>
           <div className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center "> 
           
            <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Login</h1>
                </div>

                <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                    <div className="flex gap-3 items-center px-2 py-3">
                        <div className="w-8 h-8">
                            <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="India" className="w-full h-4/5"/>

                        </div>
                        <div className="flex gap-2 items-center">
                        <h1 className="text-xl">+91</h1>
                        <FaChevronDown />
                        </div>
                    </div>
                    <input type="text" placeholder="Mobile number" className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
                </div>

                <div className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white">
                    <button>Send One Time Password</button>
                </div>

                <div className="flex items-center place-content-center">
                    <hr className="w-40"/>
                    <p className="px-4 text-greycolor-700 text-lg">or</p>
                    <hr className="w-40"/>
                </div>

                <div>
                <Link to="/signinemail">
                <button className="flex items-center h-16 w-full py-2 text-lg  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700">
                    <TbMailFilled className="w-8 h-8 text-pink-400" />
                    Continue with Email
                    </button>
                </Link>
                    
                </div>

                <div>
                <button className="flex items-center h-16 w-full py-2 text-lg  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700">
                    <FcGoogle className="w-8 h-8" />
                    Continue with Google
                    </button>
                </div>

                <div className="flex place-content-center">
                    <hr className="w-96"/>
                </div>
                <div>
                    <h1 className="text-xl">New to Zomato? <button className="text-xl text-pink-300 ">Create account</button></h1>
                </div>
            </div>
            </div>
           </div>
        </>


    )
}

export default SignInPage;