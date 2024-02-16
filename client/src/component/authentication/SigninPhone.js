import {React} from "react";
import {useNavigate} from "react-router-dom";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../config/firebaseSetup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import "./phone.css";

const Temp=()=>{
  const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const onCaptchVerify=()=>{
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => {},
            },
            auth
          );
        }
      }

      const onSignup=()=> {
        setLoading(true);
        onCaptchVerify();
    
        const appVerifier = window.recaptchaVerifier;

       
    
        const formatPh = "+" + ph;
    
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            toast.success("OTP sended successfully!");
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
    
      const onOTPVerify=()=> {
        setLoading(true);
        window.confirmationResult
          .confirm(otp)
          .then(async (res) => {
            console.log(res);
            setUser(res.user);
            setLoading(false);
            navigate("/bengaluru")
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }

      return(
        <>
        <div className="relative">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" className="w-full h-full"/>
        <Toaster toastOptions={{duration:4000}}/>
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-4xl">
            Login Success
          </h2>
          ) : (
          
           <div className="absolute top-0 left-0 flex items-center bg-black bg-opacity-60 z-10 w-full h-full justify-center "> 
           
                {showOTP ? (
                  <>
                  <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                  <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">
                      Login
                    </h1>
                  </div>
                  <div className="w-full flex justify-center rounded-full p-2 "><BsFillShieldLockFill className="m-1 text-pink-300 h-8 w-8"/></div>
                
                <label htmlFor="otp"
                className="font-bold text-xl text-greycolor-700 text-center">
                  Enter OTP
                </label>
                <div className="w-full flex justify-center items-center">
                <OtpInput value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="otp-container"></OtpInput>
                </div>
                
                <button onClick={onOTPVerify}
                className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white"
                >
                {loading &&(
                  <CgSpinner size={20} className="mt-1 animate-spin"/>
                  )}
                <span>Verify OTP</span>
                </button>
                </div>
                  </>
                ) : (
                  <>
                  <div className="flex flex-col bg-white w-1/3 rounded-lg shadow-md p-9 gap-7">
                <div>
                    <h1 className="text-4xl font-bold text-center p-3 text-greycolor-700">Login</h1>
                </div>
                <div className="w-full flex justify-center rounded-full p-2 ">
                <BsTelephoneFill  className=" h-12 w-12 text-pink-300 rounded-full m-1"/>
                
                </div>
                <label htmlFor="" className="font-bold text-2xl text-greycolor-700 text-center">Verify your Mobile Number</label>
                <PhoneInput country={"in"} value={ph} onChange={setPh}/>
                <button 
                onClick={onSignup} 
                className="h-12 w-full py-2 text-lg bg-pink-300 rounded-lg px-auto text-center text-white"
                >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin"/>
                  )}
                <span>Send OTP via SMS</span>
                </button>
                
                
                </div>
                    
                  </>

                )}
                
           
           </div>
          
        )}
        </div>
          
        </>
      )
    
}

export default Temp;