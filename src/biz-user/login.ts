import type {Request, Response} from "express"
import {createSession} from "./session"
import {createTokens} from "./tokens"

const loginUser = async (req: Request, res: Response, userId: number) => {
  const sessionToken = await createSession(userId, {
    ipAddress: req.ip,
    userAgent: req.headers["user-agent"] ?? "",
  })
  // Create JWT
  const {accessToken, refreshToken} = await createTokens(sessionToken, userId)
  // Set cookie

  const refreshExpires = new Date(Date.now() + 6000000)
  res.cookie("refreshToken", refreshToken, {
    path: "/",
    domain: "localhost",
    httpOnly: true,
    expires: refreshExpires,
  })
  // will expire at the end of the session, since no expire date was passed
  res.cookie("accessToken", accessToken, {
    path: "/",
    domain: "localhost",
    httpOnly: true,
  })
}

export {loginUser}
