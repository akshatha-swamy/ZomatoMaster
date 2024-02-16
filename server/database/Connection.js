import mongoose from "mongoose";

export default async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URL,{});
    console.log("connected to database")
   }
   catch{
    console.log(error);
    console.log("could not connect to database!")
   }
}; 