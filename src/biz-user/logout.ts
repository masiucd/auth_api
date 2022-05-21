import type {Request, Response} from "express"
import jwt from "jsonwebtoken"

const JWT = process.env.JWT_SECRET ?? "secret"
const logout = async (req: Request, res: Response) => {
  try {
    const {prisma} = await import("../db/db")
    if (req?.cookies["refreshToken"]) {
      const {refreshToken} = req.cookies
      const {sessionToken} = jwt.verify(refreshToken, JWT) as {
        sessionToken: string
      }
      await prisma.session.deleteMany({
        where: {
          sessionToken,
        },
      })
    }
    res.clearCookie("refreshToken")
    res.clearCookie("accessToken")
  } catch (error) {
    console.error(error)
  }
}

export {logout}
