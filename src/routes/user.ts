import express from "express"
import {register, users} from "../controllers/user"

const userRoute = express.Router()

userRoute.route("/").get(users)
userRoute.route("/register").post(register)

export {userRoute}
