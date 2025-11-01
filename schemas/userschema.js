import { model, Schema } from "mongoose";
import validator from "validator"
const userSchema= new  Schema({
firstName:{
type: String,
required: true
},
lastName:{
type:String

},
userName:{
type: String,
required:true,
unique: true,
validate:{
    validator:validator.isEmail, 
    message:"please enter a valid email "
}
},
password:{
type:String,
required: true,
minlength:8,
validate:{
    validator: validator.isStrongPassword,
    message:"please enter a Strong Password"
}
}
 })

 //schema- model
 
 //constructor fn -

 const User=new model("Users", userSchema)
 export default User;
