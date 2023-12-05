import React from "react";
//components
import NavBar from "../component/navbar";

const HomeLayout=(props)=>{
    return(
        <>
        <NavBar/>
        
        
        {props.children}
        
        </>
    )
};

export default HomeLayout;