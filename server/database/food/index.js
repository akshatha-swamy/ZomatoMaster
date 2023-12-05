import mongoose from "mongoose";

const FoodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    isVeg:{type:Boolean,required:true},
    isEgg:{type:Boolean,required:true},
    category:{type:String,required:true},
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images" //referencing the image schema
    },
    price:{type:Number,default:150,required:true},
    addOns:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods"
        }
    ],
    restaurants:{
        type:mongoose.Types.ObjectId,
        ref:"Restaurants",
        required:true
    }
},
{
    timestamps:true
}
);

export const FoodModel=mongoose.model("Foods",FoodSchema);

