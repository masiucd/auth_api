import express from "express"
import {
  register,
  users,
  authorizeUser,
  profile,
  logout,
} from "../controller/user"

const userRoute = express.Router()

userRoute.route("/").get(users)
userRoute.route("/register").post(register)
userRoute.route("/authorize").post(authorizeUser)
userRoute.route("/profile").get(profile)
userRoute.route("/logout").post(logout)

export {userRoute}
