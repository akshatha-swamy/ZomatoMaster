require("dotenv").config();


import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import cookieSession from "cookie-session";

//config
import googleAuthConfig from "./config/google.config";

import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/restaurants";
import Food from "./API/Food";
import Menu from "./API/menu";
import Image from "./API/Images";
import Order from "./API/orders";
import Review from "./API/reviews";






//database connection
import ConnectDB from "./database/Connection";

const zomato=express();
const session = require('express-session');

zomato.use(
  cookieSession({
    name:'session',
    keys:["zomato"],
    maxAge:24*60*60*100,
  })
)




zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.use(
  cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
  })
)

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//for application routes
//localhost:4000/auth/signup
//zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/review",Review);
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>res.json({message:"setup success yay!!"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>
console.log("server is up and running"))
.catch(()=>console.log("DB connection is failed")));