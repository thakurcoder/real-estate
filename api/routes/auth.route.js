import express from "express"
import { authorised, login, logout, register } from "../controllers/auth.controller.js"
import { cookieData } from "../middleware/cookie.middleware.js"

const router = express.Router()

router.post("/api/auth/register",register)

router.post("/api/auth/login",login)

router.post("/api/auth/logout",cookieData,logout)

router.get("/api/auth/authorised",authorised)

export default router