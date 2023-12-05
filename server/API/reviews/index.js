import  express from "express";
import { ReviewModel } from "../../database/reviews";
const Router=express.Router();

/*
Route           /new
Des             add new review
Params          None
body            Review Object
Access          Public
Method          POST
*/

Router.post('/new',async(req,res)=>{
    try{
        const {reviewData}=req.body;
        await ReviewModel.create(reviewData);
        return res.json({review:"Successfully created Review"})

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route           /delete
Des             delete  review
Params          _id
Access          Public
Method          DELETE
*/

Router.delete('/delete/:_id',async(req,res)=>{
    try{
        const {_id}=req.body;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review:"Successfully deleted Review"})

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;
