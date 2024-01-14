import React from "react";
//components
import NavBar from "../component/navbar";
import Choice from "../component/navbar/choice";

const HomeLayout=(props)=>{
    return(
        <>
        
        
        {props.children}
        
        </>
    )
};

export default HomeLayout;