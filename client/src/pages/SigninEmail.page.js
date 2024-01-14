import React from "react";

const SignInEmailPage=()=>{
    return(

        <>
             <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="login image" className="w-full h-full"/>
           <div className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center "> 
           
            <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Login</h1>
                </div>

                <div className="flex place-content-center">
                    <img src="https://b.zmtcdn.com/Zwebmolecules/73b3ee9d469601551f2a0952581510831595917292.png" alt="mail photo" className="w-40 h-40"/>
                </div>

                <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                  
                    <input type="text" placeholder="Email" className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
                </div>

                <div className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white">
                    <button>Send One Time Password</button>
                </div>

                
                <div className="flex place-content-center">
                    <hr className="w-96"/>
                </div>
                <div>
                    <h1 className="text-xl">Already Have an Account? <button className="text-xl text-pink-300 ">Login</button></h1>
                </div>
            </div>
            </div>
           </div>
        </>
    )
};

export default SignInEmailPage;