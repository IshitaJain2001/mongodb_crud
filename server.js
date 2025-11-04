 import express from "express"
import dbconnection from "./db_connection/config.js"
import userRouter from "./Routers/UserRouter.js"
import cookieParser from "cookie-parser"
  const app= express()
app.use(express.json())
app.use(cookieParser())
   dbconnection()

   app.use("/user" , userRouter)
   app.use("/product", productRouter)
    app.listen(3000, ()=>{
        console.log("server connected !!");
        
    })