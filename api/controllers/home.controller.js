import prisma from "../lib/prisma.js"

export const  userData = async (req,res)=>{
    try{
        const user = req.user
        // console.log(data)
        const data = await prisma.user.findUnique({
            where:{
                id:user.id
            }
        })
        res.status(200).json({userdata:data})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

export const profileData = async(req,res)=>{
    try {
        const user = req.user

        console.log("user",user)
        const posts = await prisma.post.findMany({
            where:{
                userId:user.id
            }
        })
        const userdata = await prisma.user.findUnique({
            where:{
                id:user.id
            }
        })
        console.log("hello")
        res.status(200).json({posts:posts,user:userdata})
        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const updateUser = async(req,res)=>{
    const {username,avatar} = req.body;
    try {
        const user = req.user

        console.log("user",user)
        
        const update = await prisma.user.update({
            where:{
                id:user.id,
            },
            data:{
                avatar:avatar,
                username:username,
            }
        })

        console.log("hello")
        res.status(200).json({message:"user updated"})
        
    } catch (error) {
        res.status(500).json({message:error})
    }
}