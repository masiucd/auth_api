import {User} from "@prisma/client"
import type {Request, Response} from "express"
import jwt from "jsonwebtoken"
import {GetUser} from "../types"
import {getUserById} from "../persistence/user"
import {setCookies} from "./cookie"

const JWT = process.env.JWT_SECRET ?? "secret"
type TokensResult =
  | {accessToken: string; refreshToken: string}
  | {accessToken: null; refreshToken: null}

const createTokens = async (
  sessionToken: string,
  userId: number
): Promise<TokensResult> => {
  try {
    // Make refresh token
    // Session ID
    const refreshToken = jwt.sign({sessionToken}, JWT)
    // Make access token
    // Session id , and user id
    const accessToken = jwt.sign({sessionToken, userId}, JWT)
    return {accessToken, refreshToken}
  } catch (error) {
    console.error(error)
    return {accessToken: null, refreshToken: null}
  }
}

const isAuthorized = async (req: Request, res: Response): Promise<GetUser> => {
  try {
    // Get the access token and refresh tokens
    // if access token
    if (req?.cookies["accessToken"]) {
      const {accessToken} = req.cookies
      // Decode access token
      const decodedToken = jwt.verify(accessToken, JWT) as {
        sessionToken: string
        userId: number
      }
      // Return user from record
      if (decodedToken?.userId) {
        return getUserById(decodedToken.userId)
      }
    }
    if (req?.cookies["refreshToken"]) {
      const {refreshToken} = req.cookies
      // Decode refresh token
      const {sessionToken} = jwt.verify(refreshToken, JWT) as {
        sessionToken: string
      }
      const {prisma} = await import("../db/db")
      // find session that is stored in DB
      // Look up session
      const currentSession = await prisma.session.findFirst({
        where: {
          sessionToken,
        },
      })
      // Confirm session
      // if session is valid
      if (currentSession?.valid) {
        // get the user that is stored on the user
        // Look up current user
        const user = await prisma.user.findFirst({
          where: {
            id: currentSession.authId,
          },
        })
        if (user) {
          // refresh tokens!

          await refreshTokens(sessionToken, user, res)
        }
        // Return current user
        return user
      }
    }
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}

const refreshTokens = async (
  sessionToken: string,
  user: User,
  res: Response
) => {
  try {
    const {accessToken, refreshToken} = await createTokens(
      sessionToken,
      user.id
    )
    setCookies(res, refreshToken, accessToken)
  } catch (error) {
    console.error(error)
    return res.status(500).send("error refreshing tokens")
  }
}

export {createTokens, isAuthorized, refreshTokens}
