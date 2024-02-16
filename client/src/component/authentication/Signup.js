import {React,useState}from "react";
import { FcGoogle } from "react-icons/fc";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp=()=>{

    const googleAuth=()=>{
        window.open(
            "http://localhost:4000/auth/google","_self"
        );
    }

    const [isChecked, setChecked] = useState(false);

    // Event handler for checkbox change
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };

    const[data,setData]=useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:""
    })
    const[error,setError]=useState("");

    const navigate=useNavigate();

    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const url = "http://localhost:4000/auth/signup";
            const data1={"credentials":data}
            console.log(data1);
            const { data1: res } = await axios.post(url, data1);

            navigate("/signin");
            console.log(res.message);
        } catch (error) {
            console.error("Error in form submission:", error);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    };
    

    return(
       
        <>
        <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" className="w-full h-full"/>
           

           <form className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center " onSubmit={handleSubmit}>
           <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md py-5 px-9 gap-5">
            
            <div>
                <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Sign Up</h1>
            </div>

            <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                
                <input type="text" placeholder="Full Name" 
                name='fullname'
                pattern="[a-zA-Z]{4,}"
                title="it must be 4 character long"
                value={data.fullname}
                required
                onChange={handleChange}
                className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
            </div>
            <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                
                <input type="text" placeholder="Phone number" 
                name='phoneNumber'
                value={data.phoneNumber}
                required
                onChange={handleChange}
                className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
            </div>
            <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                
                <input type="Email" placeholder="Email" 
                name='email'
                value={data.email}
                required
                onChange={handleChange}
                className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
            </div>
            <div className="flex w-full h-16 items-center border-2 border-solid-navbar-300 rounded-md">
                
                <input type="password" name='password'
                value={data.password}
                required
                onChange={handleChange}placeholder="Password" className="w-full h-2/3 border-l-2 border-solid-navbar-300 px-2 outline-none text-xl"/>
            </div>
            

            <div>
                <label htmlFor="myCheckbox" className="inline-flex items-center space-x-2">
                    <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-pink-500"
                    />
                    <span className="text-gray-700">I agree to Zomato's<button className="text-pink-300"> Terms of Service</button>,<button className="text-pink-300"> Privacy Policy</button>  and <button className="text-pink-300">Content Policies</button>  </span>
                </label>
            </div>

            {error && <div classname="">error</div>}

            <div className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white">
                <button type="submit">Create Account</button>
            </div>
            
            <div className="flex items-center place-content-center">
                    <hr className="w-40"/>
                    <p className="px-4 text-greycolor-700 text-lg">or</p>
                    <hr className="w-40"/>
                </div>

                <div>
                <button className="flex items-center h-16 w-full py-2 text-lg  rounded-lg px-4 text-center text-black gap-3 border-2 border-solid-navbar-300 text-greycolor-700"
                onClick={googleAuth}>
                    <FcGoogle className="w-8 h-8" />
                    Continue with Google
                    </button>
                </div>

                <div className="flex place-content-center">
                    <hr className="w-96"/>
                </div>
                <div>
                    <h1 className="text-xl">Have account already? <Link to="/signin"><button className="text-xl text-pink-300 ">Login</button></Link></h1>
                </div>
                </div>
            
           </form>
           
            

               
            </div>
           
        </>


    )
}

export default SignUp;