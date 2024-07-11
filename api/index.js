import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"


dotenv.config({path:".env"})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("connected to database")})
.catch((error)=>{console.log(error)})


const app = express()





app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT} ` )
})

app.use("/test",userRouter);