import express from "express";
import passport from "passport";


//models
import {UserModel} from "../../database/user";

import {ValidationSignUp,ValidationSignIn} from "../../validation/auth";

const Router=express.Router();//to reduce unnecssary reloding of page.

/*
Route               /Signup
Description         Signup with email and password
Params              None
Access              Public
Method              POST
*/

Router.post("/signup", async (req, res) => {
    try {

    await ValidationSignUp(req.body.credentials);
        const { email, phoneNumber } = req.body.credentials;
        await UserModel.findEmailAndPhone({ email, phoneNumber });

        const newUser = await UserModel.create(req.body.credentials);

        // Generate JWT auth token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route               /Signin
Description         Signin with email and password
Params              None
Access              Public
Method              POST
*/

Router.post("/signin", async (req, res) => {
    try {
        await ValidationSignIn(req.body.credentials);
        const user=await UserModel.findByEmailAndPassword(
            req.body.credentials
            );

        // Generate JWT auth token
        const token = user.generateJwtToken();

        return res.status(200).json({ token,status:"Success","data":user});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route               /google
Description         google signin
Params              None
Access              Public
Method              GET
*/

Router.get("/google",passport.authenticate("google",{
    scope:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email"]
}));

/*
Route               /google/callback
Description         google signin callback
Params              None
Access              Public
Method              GET
*/

Router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/bengaluru",
    failureRedirect:"/login/failed",
})

);







export default Router;

