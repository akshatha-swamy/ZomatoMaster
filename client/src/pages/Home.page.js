import React from "react";
import HomePageButton from "../component/button";
import { Link } from 'react-router-dom';

const HomePage=()=>{
    return(
        <>
        
        <div className="relative">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="login image" className="w-full"/>
           
        <div className="flex absolute top-11 right-11 z-40 gap-7 text-3xl mr-8 text-white">
            <button className="p-3">Add Restaurant</button>
            <Link to={"/signin"}>
            <button className="p-3">Log in</button>
            </Link>
            <Link to={"/signup"}>
            <button className="p-3">Sign up</button>
            </Link>
            
        </div>

        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-white text-6xl z-10 ">
        <h1 className="text-white text-8xl font-extrabold p-4">zomato</h1>
        <h1 className="text-white text-5xl">Find the best restaurants, cafés</h1>
        <h1 className="text-white text-5xl">and bars in India</h1>

        </div>
           
        </div>

        <div className="m-9">
        <div className="flex flex-col m-5 ">
            <div className="flex items-center m-9 place-content-center">
                <h1 className="text-5xl">Popular locations in </h1>
                <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="india flag" className="w-12 h-12 mx-3"/>
                <h1 className="text-5xl">India</h1>
            </div>
            <div className="flex flex-col items-center m-3 place-content-center text-2xl">
                <h1>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,</h1>
                <h1>Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you,</h1>
                <h1> to find your next great meal.</h1>
            </div>

            
        </div>
        <div className="m-9 grid grid-cols-3 gap-9 place-content-center">
            <HomePageButton city="Agra"/>
            <HomePageButton city="Ahmedabad"/>
            <HomePageButton city="Ajmer"/>
            <HomePageButton city="Alappuzha"/>
            <HomePageButton city="Amritsar"/>

            <Link to="/bangaluru">
            <HomePageButton city="Bangaluru"/>
            </Link>
            
            <HomePageButton city="Bhopal"/>
            <HomePageButton city="Bhubaneshwar"/>
            <HomePageButton city="Chandigarh"/>
            <HomePageButton city="Chennai"/>
            <HomePageButton city="Coimbatore"/>
            <HomePageButton city="Cuttack"/>
            <HomePageButton city="Delhi"/>
            <HomePageButton city="Goa"/>
            <HomePageButton city="Hyderabad"/>
            <HomePageButton city="Kolkata"/>
            <HomePageButton city="Kochi"/>
            <HomePageButton city="Lucknow"/>
            <HomePageButton city="Madurai"/>
            <HomePageButton city="Patna"/>
            <HomePageButton city="Pune"/>
            <HomePageButton city="Puducherry"/>
            <HomePageButton city="Shimla"/>
            <HomePageButton city="Udaipur"/>


            </div>
        </div>
        

        
        
        
        

        </>
    )
};
export default HomePage;