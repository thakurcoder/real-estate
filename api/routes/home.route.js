import express from "express"
import { profileData, updateUser, userData } from "../controllers/home.controller.js"
import { cookieData } from "../middleware/cookie.middleware.js";

const router = express.Router()

router.get("/api/home/data",cookieData,userData)
router.get("/api/profile/data",cookieData,profileData)
router.put("/api/user/update",cookieData,updateUser)

export default router;