import joi from "joi";

export const ValidationOrderId=(orderId)=>{
    const Schema=joi.object({
      _id:joi.string().required()
   });
   return Schema.validateAsync(orderId);

};