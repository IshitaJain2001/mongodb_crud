import { Schema ,model} from "mongoose";

 const userSchema = new   Schema({
    name:{
        type: String
    },
    age:{
        type:Number
    },
    state:{
        type:String
    }
   })

    const User= new model("Users", userSchema)
    export default User;

   //string

    //model 

    // require  - common js 
    // import - modular js

