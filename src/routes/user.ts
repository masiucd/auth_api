import express from "express"
import {users} from "../controllers/user"

const userRoute = express.Router()

userRoute.route("/").get(users)

export {userRoute}
