import bycript from "bcryptjs"
import User from "../models/user.model.js";
import {errorHandler} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashpassword = bycript.hashSync(password,10)
    const newUser = new User({username,email,password:hashpassword})
    try{

        await newUser.save()
        res.status(201)
        res.send({message:"user added!!!"})
    }
    catch(error){
        next(error)
    }
    
}

export const signin = async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        const validUser = await User.findOne({email:email})
        if (!validUser) return next(errorHandler(404,"wrong email!"))
        const vaildPassword = bycript.compareSync(password,validUser.password)
        if (!vaildPassword) return next(errorHandler(404,"wrong password!"))
        const token = jwt.sign({id:validUser._id},process.env.JWT_TOKEN)
        validUser
        res.cookie("acces_token", token , {httpOnly:true}).status(200).json(validUser.email);
    }   
    catch(error){
        next(error)
    }
    
}
