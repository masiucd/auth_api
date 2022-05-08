import {User} from "@prisma/client"
import type {Request} from "express"
import {comparePassword} from "./password"

const authorize = async (req: Request, user: User): Promise<[boolean, number]> => {
  try {
    const {password, id} = user
    const isAuthorized = await comparePassword(req.body.password, password)
    return [isAuthorized, id]
  } catch (error) {
    console.error(error)
    return [false, -1]
  }
}

export {authorize}
