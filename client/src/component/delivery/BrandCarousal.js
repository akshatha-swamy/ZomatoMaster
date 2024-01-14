import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../config/deliveryConfig";

//components
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import brandImages from "./Images/brandImages";

const BrandCarousal=()=>{
    return(
        <>
    
           <div className="BrandContainer ">
           <Slider {...settings}>
                {brandImages.map((delivery,index)=>(
                    <div className="h-52 w-auto px-2 py-4">
                        <DeliveryFoodCategory
                            key={index}
                            src={delivery.src}
                            alt={delivery.title}
                            title={delivery.title}
                            time={delivery.time}
                        />
                    </div>
                ))}
            </Slider>
           </div>
        </>
    );
}

export default BrandCarousal;