import React from "react";
import NavBar from "../navbar";
import Choice from "../navbar/choice";

const DeliveryFoodCategory=(props)=>{
    return(
        <>

            <div className="mx-6 my-2">
            
                <div className="h-52 w-52 m-auto  ">
                    <img
                        src={props.src}
                        alt={props.title}
                        className="h-full w-full rounded-full"
                    />
                </div>

                <div>
                    <h1 className="m-3 text-2xl font-medium text-center text-greycolor-700">{props.title}</h1>
                    <h1 className="m-3 text-xl text-center text-greycolor-700">{props.time}</h1>
                </div>
            </div>          
        </>
    )
}

export default DeliveryFoodCategory;