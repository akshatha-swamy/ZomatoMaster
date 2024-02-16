import React from "react";
import { ReactDOM } from "react";
import { useParams } from "react-router-dom";
//components
import Delivery from "./delivery";
import DiningOut from "./DiningOut";
import NightLife from "./nightLife";

const Master=()=>{
    const {type}=useParams();
    return <>
    <div className="my-4 px-9">
    {type==="delivery" && <Delivery/>}
    {type==="diningOut" && <DiningOut/>}
    {type==="nightLife"&& <NightLife/>}
    </div>
    </>;
};

export default Master;