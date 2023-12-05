import joi from "joi";

export const ValidationUserId=(userId)=>{
    const Schema=joi.object({
      _userId:joi.string().required()
   });
   return Schema.validateAsync(userId);

};