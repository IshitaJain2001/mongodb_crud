import { Router } from "express";
import { deleteUser, login, signup, updateUser } from "../controller/UserController.js";

 let userRouter= Router()

userRouter.post("/signup",signup )
userRouter.post("/login", login)
// patch / put
userRouter.patch("/updateUser", updateUser)
userRouter.delete("/deleteUser",deleteUser )

 export default userRouter


//   http://localhost:3000/user/signup