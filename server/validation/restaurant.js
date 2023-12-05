import joi from "joi";

export const ValidationRestaurantCity=(restaurantobj)=>{
    const Schema=joi.object({
      city:joi.string().required()
   });
   return Schema.validateAsync(restaurantobj);

};


export const ValidationReastaurantSearch=(restaurantObj)=>{
    const Schema=joi.object({
      searchString:joi.string().required()
   });
   return Schema.validateAsync(restaurantObj);

};
