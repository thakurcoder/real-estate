import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config({path:".env"})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("connected to database")})
.catch((error)=>{console.log(error)})


const app = express()



app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT} ` )
})

app.use("/test",userRouter);
app.use("/",authRouter)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
    
})