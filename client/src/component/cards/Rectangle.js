import React from "react";

const Circle=()=>{
    return(
        <>
            <div>
                
            <div className=" flex flex-col item-start gap-2 px-2">
                <div className="h-70 flex ">
                    <img src={props.src} alt={props.title} className="rounded-md"/>
                </div>
                <h4 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-700 " } truncate`}>{props.title}</h4>
                
        </div>
                </div>

                <div>

                </div>
          
        </>
    )
}