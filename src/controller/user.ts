import type {Request, Response} from "express"

import {getUsers, insertNewUser, getUserByEmail} from "../persistence/user"
import {validateEmail, authorize, hashPassword, loginUser} from "../biz-user"

type ResponseReturnType = Promise<Response<unknown, Record<string, unknown>>>

const users = async (req: Request, res: Response): ResponseReturnType => {
  try {
    const users = await getUsers()
    return res.send({users, message: "users", status: 200})
  } catch (err) {
    console.error(err)
    return res.send({error: "error getting users", status: 500, url: req.url})
  }
}

const register = async (req: Request, res: Response): ResponseReturnType => {
  try {
    const {email, password, name} = req.body
    if (!email || !password || !name) res.send({error: "missing fields"})
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) res.send({error: "invalid email", status: 400})
    // check if email exists in db
    const userByEmail = await getUserByEmail(email)
    if (userByEmail !== null) {
      return res.json({message: "email already exists", status: 400})
    }

    const hashedPassword = await hashPassword(password)
    const user = await insertNewUser({email, hashedPassword, name})

    res.header("Content-Type", "application/json")
    return res.send({user, message: "user created", status: 200})
  } catch (err) {
    console.error(err)
    return res.send({error: "error creating user", status: 500})
  }
}

const authorizeUser = async (req: Request, res: Response): ResponseReturnType => {
  try {
    const user = await getUserByEmail(req.body.email)
    if (user === null) {
      return res.send({error: "user not found", status: 400})
    }

    const [isAuthorized, userId] = await authorize(req, user)
    if (isAuthorized) {
      await loginUser(req, res, userId)
      return res.send({message: "authorized", status: 200})
    }
    return res.send({message: "Not authorized", status: 401})
  } catch (err) {
    console.error(err)
    return res.send({error: "error authorize user", status: 500})
  }
}

export {users, register, authorizeUser}
