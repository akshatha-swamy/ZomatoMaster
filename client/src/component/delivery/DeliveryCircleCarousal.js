import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../config/deliveryConfig";


//components
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import DeliveryCircleImages from "./Images/deliveryCircle";


const DeliveryCircleCarousal=()=>{
    return(
        <>
    
           <div className="DeliveryCircleContainer ">
           <Slider {...settings}>
                {DeliveryCircleImages.map((delivery,index)=>(
                    <div className="h-52 w-auto px-2 py-4">
                        <DeliveryFoodCategory
                            key={index}
                            src={delivery.image}
                            alt={delivery.title}
                            title={delivery.title}
                            
                            
                        />
                    </div>
                ))}
            </Slider>
           </div>
        </>
    );
}

export default DeliveryCircleCarousal;