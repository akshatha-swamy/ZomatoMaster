import React from "react";
//components
import DeliveryCircleCarousal from "./DeliveryCircleCarousal";
import BrandCarousal from "./BrandCarousal";
import NavBar from "../navbar";
import Choice from "../navbar/choice";

const Delivery=()=>{
    return(
        <>
        <NavBar/>
        <Choice/>
        <div className="m-9">
        <div className="w-full h-96 bg-navbar-200">
        <h1 className="px-10 py-5 text-4xl font-medium text-greycolor-700m-5">Inspiration for your first order</h1>
        <DeliveryCircleCarousal/>
        </div>

        <div className="w-full h-96m-5">
            <h1 className="px-10 py-5 text-4xl font-medium text-greycolor-700">Top Brands For You</h1> 
            <BrandCarousal/>
        </div>
       
        </div>
        
        </>
    )
}

export default Delivery;