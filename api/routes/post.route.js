import express from "express"
import { addPost, deletePost, getPosts, getpost } from "../controllers/post.controller.js"
import { cookieData } from "../middleware/cookie.middleware.js"

const router = express.Router()

router.post("/api/post/getposts",getPosts)
router.post("/api/post/getpost",getpost)
router.post("/api/post/addpost",cookieData,addPost)
router.delete("/api/post/deletpost/:id",cookieData,deletePost)
export default router