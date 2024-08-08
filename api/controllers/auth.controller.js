import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"

export const register = async (req,res)=>{
    const {username,email,password} = req.body

    try {
        // // console.log("hello")
        const checkUserName = await prisma.user.findUnique({
            where:{
                username:username
            }
        })
        if(checkUserName){
            return res.status(400).json({message:"username already exist"})
        }
        const checkUserEmail = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(checkUserEmail){
            return res.status(400).json({message:"email already exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })

        if(!newUser){
            return res.status(300).json("username or email already present")
        }

        console.log("new user")
        
        res.status(201).json({message:"user created succesfull"})
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}



export const login = async (req,res)=>{
    const{username,password} = req.body;
  
    try {
// finding the user in database
        const user = await prisma.user.findUnique({
            where:{
                username:username
            }
        })
       

        if(!user){
            console.log("in not user")
            return res.status(400).json({message:"user not found"})

        }
     
// checking the password
        const checkPassword = await bcrypt.compare(password, user.password); 

        if(!checkPassword){
            return res.status(400).json({message:"wrong password"})
        }

        // token
        const tokenData = {
            id:user.id,
            username:user.username,
            email:user.email,
        }
        console.log(tokenData)
       
        
  
        const token = jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"100d" })

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite: 'None',
        })

        return res.status(200).json({ message: "User login successful" });
    } catch (error) {
        res.status(400).json({
            message:"router error",
            error:error
        })
    }
}


export const logout = (req,res)=>{
    res.clearCookie("token").status(200).json({message:"logout successful"})
}

export const authorised = (req,res)=>{
    const token = req.cookies.token

    try {
        if(!token){
            // return res.status(401).json({message:"No token present"})
            res.send(false)
        }
        console.log("asd")
        const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET)
        // res.status(200).send(decodeToken)
        res.send(true)
    }
    catch(error){
        res.status(500)
    }
}