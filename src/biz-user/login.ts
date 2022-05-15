import type {Request, Response} from "express"
import {setCookies} from "./cookie"
import {createSession} from "./session"
import {createTokens} from "./tokens"

const loginUser = async (req: Request, res: Response, userId: number) => {
  try {
    const sessionToken = await createSession(userId, {
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"] ?? "",
    })
    // Create JWT
    const {accessToken, refreshToken} = await createTokens(sessionToken, userId)
    // Set cookie
    setCookies(res, refreshToken, accessToken)
  } catch (error) {
    res.status(500).send(error)
  }
}

export {loginUser}
