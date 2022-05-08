import express from "express"
import {register, users, authorizeUser} from "../controller/user"

const userRoute = express.Router()

userRoute.route("/").get(users)
userRoute.route("/register").post(register)
userRoute.route("/authorize").post(authorizeUser)

export {userRoute}
