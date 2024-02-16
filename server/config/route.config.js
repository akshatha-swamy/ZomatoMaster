import jwtPassport from "passport-jwt";

//database model

import { UserModel } from "../database/user";
import passport from "passport";

const JWTStrategy=jwtPassport.Strategy;
const ExtractJwt=jwtPassport.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoApp"
};

export default (passport)=>{
    passport.use(
        new JWTStrategy(options,async(jwt__payload,done)=>{
            try{
                const doesuserExist=await UserModel.findById(jwt__payload.user);
                if(!doesuserExist)
                    return done(null,false);
                return done(null,doesuserExist);
            }

            catch(error){
                throw new Error(error);
            }
        })
    );
}