import jwt from "jsonwebtoken"

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

export {createTokens}
