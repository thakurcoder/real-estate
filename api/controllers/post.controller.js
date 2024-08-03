import prisma from "../lib/prisma.js";

export const getPosts = async (req,res)=>{
    const quary = req.body
    console.log("quary",quary)
    try {
        const posts = await prisma.post.findMany({
            where:{
                city:quary.location || undefined, 
                type:quary.type || undefined, 
                property:quary.property || undefined,
                bedroom:quary.bedroom || undefined,
                price:{
                    gte: parseInt(quary.minPrice) || 0,
                    lte:parseInt(quary.maxPrice) || 1000000000000000,
                }
            }
        })
        console.log("post",posts)
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}

export const getpost = async (req,res)=>{
    const {id} = req.body
    console.log(id)
    try {
        const post = await prisma.post.findUnique({
            where:{
                id
            }
        })

        const user = await prisma.user.findUnique({
            where:{
                id:post.userId
            }
        })
        console.log(user)
        res.status(200).json({post:post,username:user.username,avatar:user.avatar})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}

export const addPost = async (req,res)=>{
    const body = req.body;
    const user = req.user
    try {
        const newPost = await prisma.post.create({
            data:{
                ...body,
                userId:user.id
            }
        })
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}

export const deletePost = async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const user = req.user
    try {

        const post = await prisma.post.findUnique({
            where:{
                id
            }
        })
        console.log(post)
        if (post.userId!==user.id){
            return res.status(403).json({messgae:"Not Authorised"})
        }


        const delet =  await prisma.post.delete({
            where:{id}
        })
        
        res.status(200).json({message:"post deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}

