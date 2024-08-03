import express from "express"
import postRouter from "./routes/post.route.js"
import authRouter from "./routes/auth.route.js"
import homeRouter from "./routes/home.route.js"
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"


dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json()); // for reading json from browser

app.use(cors({
    origin:"https://real-estate-frontend-xpfi.onrender.com",
    credentials:true
}))

app.use("/api/test",(req,res)=>{
    res.send("hello")
})

app.use(postRouter);
app.use(authRouter);
app.use(homeRouter);

app.listen(process.env.port || 5000,()=>{
    console.log("server is running ",5000)
})
