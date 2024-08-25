// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';

import mongoose from 'mongoose';

import  dbConnect  from './db/dbconnection.js';
dotenv.config({
    path: './env',
});

dbConnect();











/*import express from 'express';
const app =express();
(async()=>{
    try{
         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log(error);
            throw error
         })

         app.listen(process.env.PORT,()=>{
             console.log("server is connected",`${process.env.PORT}`)
         })
    }
    catch(error){
        console.log(error);
        throw error
    }

})()
    */