import  express from "express";
import { RestaurantModel } from "../../database/allModels";

import { ValidationRestaurantCity,ValidationReastaurantSearch } from "../../validation/restaurant";
import { ValidationRestaurantId } from "../../validation/food";

const Router=express.Router();

/*
Route           /
Des             Get all restaurants details
Params          None
Access          Public
Method          GET
*/

Router.get('/',async(req,res)=>{
    try{

        await ValidationRestaurantCity(req.query);
        const {city}=req.query;
        const restaurants=await RestaurantModel.find({city});
        return res.json({restaurants})

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route           /
Des             get particular restaurant details on id
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id",async(req,res)=>{
    try{
        await ValidationRestaurantId(req.params);
       const {_id}= req.params;
        const restaurant=await RestaurantModel.findOne(_id);
        if(!restaurant)
        return res.status(404).json({error:"Restaurant not found"});

        return res.json({restaurant});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }

});

/*
Route           /search
Des             get restaurant details on search
Params          none
Body            searchString
Access          Public
Method          GET
*/

Router.get("/search",async(req,res)=>{
    try{
        await ValidationReastaurantSearch(req.body);
        const {searchString}=res.body;
        const restaurant=await RestaurantModel.find({
            name:{$regex:searchString,$options:"i"}//regex ,i=case insensitive
        });

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});



export default Router;
