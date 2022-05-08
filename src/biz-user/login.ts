import type {Request} from "express"
import {createSession} from "./session"
const loginUser = async (req: Request, userId: number) => {
  const sessionToken = await createSession(userId, {
    ipAddress: req.ip,
    userAgent: req.headers["user-agent"] ?? "",
  })
  console.log("sessionToken", sessionToken)

  // TODO set cookie
  // TOTO: Create JWT
}

export {loginUser}
