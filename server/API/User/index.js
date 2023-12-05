import  express from "express";
import { UserModel } from "../../database/user";
const Router=express.Router();
import { ValidationUserId } from "../../validation/user";

/*
Route           /
Des             get a User data
Params          _id
body            none
Access          Public
Method          GET
*/

Router.get('/:_userId',async(req,res)=>{
    try{
        await ValidationUserId(req.params);
        const {_userId}=req.params;
        const getUser=await UserModel.findById(_userId);
        return res.json({user:getUser});

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route           /update
Des            update a User data
Params          _userId
body            user data
Access          Public
Method          PUT
*/

Router.put('/update/:_userId',async(req,res)=>{
    try{
        await ValidationUserId(req.params);
        const {_userId}=req.body;
        const {userData}=req.body;
        const updateUserData=await UserModel.findByIdAndUpdate(_userId,
            {
                $set:userData
            },
            {new:true}
            );
        return res.json({user:updateUserData});

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});