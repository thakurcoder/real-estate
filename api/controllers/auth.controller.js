import bycript from "bcryptjs"
import User from "../models/user.model.js";

export const auth = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashpassword = bycript.hashSync(password,10)
    const newUser = new User({username,email,password:hashpassword})
    try{

        await newUser.save()
        res.status(201)
        res.send("<h1>user add!!1</h1>")
    }
    catch(error){
        next(error)
    }
    
}