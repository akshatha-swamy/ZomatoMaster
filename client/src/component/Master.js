import React from "react";
import { ReactDOM } from "react";
import { useParams } from "react-router-dom";
//components
import Delivery from "./delivery";

const Master=()=>{
    const {type}=useParams();
    return <>
    <div className="m-4">
    {type==="delivery" && <Delivery/>}
    </div>
    
    </>;
};

export default Master;