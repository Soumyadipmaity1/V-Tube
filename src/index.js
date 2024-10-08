import dotenv from "dotenv"

import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
});

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MONGO DB CONNECTION FAILED", err);
})



















/*
Simple approach 


import express from "express";
const app = express();
;( async() => {

    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error;
        })
        app.listen (process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error:" ,error);
        throw error;
        
    }

})()

*/