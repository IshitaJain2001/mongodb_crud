 import mongoose from "mongoose";
 import dotenv from "dotenv"
 dotenv.config() 
 
export default async function dbconnection(){
mongoose.connect(process.env.mongodb_uri)
.then(()=>{
    console.log("connected successfully ");
    
})
.catch((e)=>{
    console.log("connection err:",e );
    
})
 }