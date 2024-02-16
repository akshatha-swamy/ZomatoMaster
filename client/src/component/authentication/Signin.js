'use client'
import React, { useState,useEffect } from "react";
import { TbMailFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";


const SignIn=()=>{

    const googleAuth=()=>{
        window.open(
            "http://localhost:4000/auth/google","_self"
        );
    }

    return(
        <>
        <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" className="w-full h-full"/>
           <div className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center "> 
           
            <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Login</h1>
                </div>

                <Link to="/signinphone">
                <button className="flex items-center h-16 w-full py-2 text-xl  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700">
                    <FaPhoneAlt className="w-8 h-8 text-pink-400" />
                    Continue with Phone
                    </button>
                </Link>
        
                

                <div className="flex items-center place-content-center">
                    <hr className="w-40"/>
                    <p className="px-4 text-greycolor-700 text-lg">or</p>
                    <hr className="w-40"/>
                </div>

                <div>
                <Link to="/signinemail">
                <button className="flex items-center h-16 w-full py-2 text-xl  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700">
                    <TbMailFilled className="w-8 h-8 text-pink-400" />
                    Continue with Email
                    </button>
                </Link>
                    
                </div>

                <div>
                
                <button className="flex items-center h-16 w-full py-2 text-xl  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700"
                onClick={googleAuth}>
                    <FcGoogle className="w-8 h-8" />
                    Continue with Google
                </button>
                
                
                </div>

                <div className="flex place-content-center">
                    <hr className="w-96"/>
                </div>
                <div>
                    <h1 className="text-xl">New to Zomato? <Link to="/signup"><button className="text-xl text-pink-300 ">Create account</button></Link></h1>
                </div>
            </div>
            </div>
           </div>
        </>


    )
}

export default SignIn;