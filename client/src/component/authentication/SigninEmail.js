import {React,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const SignInEmail=()=>{

    const[data,setData]=useState({
        email:"",
        password:""
    })
    const[err,setError]=useState("");

    

    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const url = "http://localhost:4000/auth/signin";
            const data1={"credentials":data}
            console.log(data1);
            const { data: res } = await axios.post(url, data1);
            localStorage.setItem("token",res.token);
            window.location="/bengaluru"
            console.log("token",res);
        } catch (error) {
            console.log("Error in form submission:sub", error.response);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
                alert(error.response.data.error);
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    };
    

    return(

        <>
             <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="login image" className="w-full h-full"/>
        <form className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center" onSubmit={handleSubmit}>
            
        <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Login</h1>
                </div>

                <div className="flex place-content-center">
                    <img src="https://b.zmtcdn.com/Zwebmolecules/73b3ee9d469601551f2a0952581510831595917292.png" alt="mail photo" className="w-40 h-40"/>
                </div>

                <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                  
                    <input type="email" placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
                </div>
                <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                  
                    <input type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required placeholder="Password" className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
                </div>
                

                <div className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white">
                    <button className="h-full w-full">Login</button>
                </div>

                
                <div className="flex place-content-center">
                    <hr className="w-96"/>
                </div>
                <div>
                    <h1 className="text-xl">Already Have an Account? 
                    <Link to="/signin"><button className="text-xl text-pink-300 " type="submit">Login</button></Link>
                    </h1>
                </div>
            </div>
        </form>
          
           
            </div>
           
        </>
    )
};

export default SignInEmail;