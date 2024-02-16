import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";


const GoogleStrategy=googleOAuth.Strategy;

export default (passport)=>{
    passport.use(
        new GoogleStrategy({
            clientID:"398674415190-lkhe9f0aqrr5s6imr855f0tbq0dautv6.apps.googleusercontent.com",
            clientSecret:"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",
            callbackURL:"http://localhost:4000/auth/google/callback"

        },
    async(accessToken,refreshToken,profile,done)=>{
        //creating a new user
        const newUser={
            fullName:profile.displayName,
            email:profile.emails[0].value,
            profilePic:profile.photos[0].value
        };
        try{
            //check whether the user exists or not
            const user=await UserModel.findOne({email:newUser.email});
           
            if(user){
                 //generating a jwt token
                const token=user.generateJwtToken();
                //return user
                done(null,{user,token});
                
            }
            else{ 
                //create a new users
                const user=await UserModel.create(newUser);
                 //generating a jwt token
                 const token=user.generateJwtToken();
                //return user
                done(null,{user,token});
                
            }
            console.log("user data:",newUser);
        }
        catch(error){
            done(error,null);
        }
    }
        )
    );
     passport.serializeUser((userData,done)=>done(null,{...userData}));
     passport.deserializeUser((id,done)=>done(null,id));

};
