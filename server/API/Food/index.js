import express from "express";


//database model
import { FoodModel } from "../../database/allModels";

import { ValidationCategory,ValidationRestaurantId } from "../../validation/food";

const Router=express.Router();

/*
Route           /
Des             Get all food based on particular restaurant
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id",async(req,res)=>{
    try{
        await ValidationRestaurantId(req.params);
        const {_id}=req.params;
        const foods= await FoodModel.find({restaurant:_id});
        return res.json({foods});

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});

/*
Route           /r
Des             Get all food based on particular category
Params          category
Access          Public
Method          GET
*/

Router.get("/r/:category",async(req,res)=>{
    try{
        await ValidationCategory(req.params);
        const {category}=req.params;
        const foods=await FoodModel.find({
            category:{$regex:category,$options:"i"}
        });

    }
    catch(error){
        res.status(500).json({error:error.message});

    }
});

export default Router;