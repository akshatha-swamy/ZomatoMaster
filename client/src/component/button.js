import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";


const HomePageButton=(props)=>{
    return(
        <>
             <button className=" flex w-full p-5 m-2 border border-solid-navbar-300 h-auto rounded-lg shadow-md justify-between items-center text-2xl ">{props.city} Restaurants <MdOutlineChevronRight /></button>
        </>
    )
}

export default HomePageButton;