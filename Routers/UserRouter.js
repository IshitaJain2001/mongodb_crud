import { Router } from "express";
import { addUser,  getByAge, getByState, getOnlyNames, limitedUsers } from "../controller/UserController.js";

 let userRouter= Router()

// userRouter.post("/signup",signup )
// userRouter.post("/login", login)
// // patch / put
// userRouter.patch("/updateUser", updateUser)
// userRouter.delete("/deleteUser",deleteUser )
userRouter.post("/addUser",function addUser(){
    
} )
userRouter.get("/getByAge",getByAge )
userRouter.get("/getBystate",getByState )
userRouter.get("/getOnlyNames",getOnlyNames )
userRouter.get("/limitedUsers" , limitedUsers)
 export default userRouter


//   http://localhost:3000/user/signup