import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt  from "jsonwebtoken";

const UserSchema=new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String},
    address:[{detail:{type:String},for:{type:String}}],
    phoneNumber:[{type:Number}]
},
{
    timestamps:true
}
);

UserSchema.methods.generateJwtToken=function(){
    return jwt.sign({user:this.id.toString()},"ZomatoApp");
}

UserSchema.statics.findEmailAndPhone = async function ({ email, phoneNumber }) {
    // Check whether the email exists
    const checkUserByEmail = await this.findOne({ email });

    // Check whether the phone number exists
    const checkUserByPhone = await this.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exists");
    }

    return false;
};

UserSchema.statics.findByEmailAndPassword = async function ({ email, password }) {
    // Check whether the email exists
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    //compare the password
    const doesPasswordMatch= await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) {
        throw new Error("Invalid password");
    }

    return user;
};

UserSchema.pre("save",function(next){
    const user=this;
    //password is not modified
    if(!user.isModified("password")) return next();
//generate bcrypt password
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);
        bcrypt.hash(user.password, salt , (error, hash) => {
            if(error) return next(error);
            user.password=hash;
            return next();
    })

});
});
export const UserModel=mongoose.model("Users",UserSchema);