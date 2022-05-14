import type {Request} from "express"
import jwt from "jsonwebtoken"
import {getUserById} from "../persistence/user"

const JWT = process.env.JWT_SECRET ?? "secret"
type TokensResult =
  | {accessToken: string; refreshToken: string}
  | {accessToken: null; refreshToken: null}

const createTokens = async (sessionToken: string, userId: number): Promise<TokensResult> => {
  try {
    // Make refresh token
    // Session ID
    const refreshToken = jwt.sign({sessionToken}, JWT)
    // Make access token
    // Session id , and user id
    const accessToken = jwt.sign({sessionToken, userId}, JWT)
    return {accessToken, refreshToken}
  } catch (error) {
    console.log(error)
    return {accessToken: null, refreshToken: null}
  }
}

const isAuthorized = async (req: Request) => {
  try {
    // Get the access token and refresh tokens
    // if access token
    if (req?.cookies["accessToken"]) {
      const {accessToken} = req.cookies
      // Decode access token
      const decodedToken = jwt.verify(accessToken, JWT) as {sessionToken: string; userId: number}
      // Return user from record
      if (decodedToken?.userId) {
        return getUserById(decodedToken.userId)
      }
    }
    // Decode refresh token
    // Look up session
    // Confirm session
    // if session is valid
    // Look up current user
    // refresh tokens!
    // Return current user
  } catch (error) {
    console.log(error)
  }
}

const refreshTokens = async () => {
  //
}

export {createTokens, isAuthorized, refreshTokens}
