 import bcrypt from "bcrypt"
import User from "../schemas/userschema.js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()
  export async function signup(req, res){
let {firstName, lastName, userName, password}= req.body 
if(!firstName || !password || !userName){
    return res.status(400).json({
        message:" incomplete info "
    })
}
// bcrypt 
let hashedPassword= await bcrypt.hash(password, 10)
try {
    let user=     new User({
        firstName, lastName, userName, password:hashedPassword
    })
     await user.save()
     return res.status(201).json({
        message:"new user saved in db"
     })
    
} catch (error) {
 return res.status(500).json({
    message:"error saving in db:" + error 
 })   
}
 }

 export  async function login(req, res ){
const {userName, password} = req.body 

if(!userName || !password){
     return res.status(400).json({
        message:"information missing "
     })
}

// userName db exist 

const user=  await User.findOne({
    userName:userName
  })

  if(!user){
    return res.status(404).json({
        message:"username doesnot exist "
    })
  }

  // user - password

 const isverified= await bcrypt.compare(password, user.password)
if(!isverified){
return res.status(404).json({
    message:"invalid password !!"
})
}// protected routes //loggedin 
// ticket 
const token=  jwt.sign({id:user._id}, process.env.mySecretkey)
 return res.cookie("token", token ).status(200).json({
    message:"user successfully loggedin !!"
 })
  }

  export  async function updateUser(req, res){
   // userName/ email
   
    // userName - static 
     // first , last , pssword 

    let  {userName, firstName, lastName, password} = req.body 

//     // findOne

//   let user=   await User.findOne({userName:userName})

// better -production 

//  token - mongodb._id
//token 

 const {token}= req.cookies

  if(!token){
    res.status(401).json({
        message:"pls login "
    })
  }
  const {id} = jwt.verify(token, process.env.mySecretkey)

   if(!id){
    return res.status(401).json({
        message:" incorrect token "
    })
   }

   //id - document

 let user=  await User.findById(id)
 if(!user){
    return res.status(404).json({
        message:"user not found in db"
    })
 }

let newUser=  await User.findOneAndUpdate({
    _id:id},{userName, firstName, lastName, password},{new:true} )

 res.status(200).json({
    message:"user updated successfully",
    updatedUser: newUser
 })
    }

    //dotenv express mongoose 

     export async function deleteUser(req,res){
        const {token}= req.cookies;

         if(!token) return res.status(401).json({
            message:"please login first"
         })

         //jwt verifiction

    const {id}=      jwt.verify(token , process.env.mySecretkey)
    if(!id) return res.status(401).json({
        message:"token was incorrect"
    })

    let user =await User.findById(id)

     if(!user) return res.status(404).json({
        message:"user not found in db"
     })

  const userDeleted=  await   User.findOneAndDelete({_id:id})

  return res.status(200).json({
    message:"user deleted successfully !"
  })
     } 