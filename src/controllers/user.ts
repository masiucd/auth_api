import type {Request, Response} from "express"
import {prisma} from "../db/db"
import {validateEmail} from "../lib/validate"
import {hashPassword} from "../lib/password"
import {getUsers, registerUser} from "../persistence/user"

const users = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsers()
    res.header("Content-Type", "application/json")
    res.send({users, message: "users", status: 200})
  } catch (err) {
    console.error(err)
    res.send({error: "error getting users", status: 500, url: req.url})
  }
}

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const {email, password, name} = req.body
    if (!email || !password || !name) res.send({error: "missing fields"})
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) res.send({error: "invalid email", status: 400})
    // check if email exists in db
    const userByEmail = await prisma.user.findFirst({where: {email}})
    if (userByEmail) res.send({error: "email already exists", status: 400})

    const hashedPassword = await hashPassword(password)
    const user = await registerUser({email, hashedPassword, name})

    res.header("Content-Type", "application/json")
    res.send({user, message: "user created", status: 200})
  } catch (err) {
    console.error(err)
    res.send({error: "error creating user", status: 500})
  }
}

export {users, register}
