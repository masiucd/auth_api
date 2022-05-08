import {Session} from "@prisma/client"

type SessionData = Pick<Session, "ipAddress" | "sessionToken" | "authId" | "valid" | "userAgent">

const insertSession = async ({
  ipAddress,
  sessionToken,
  authId,
  userAgent,
  valid,
}: SessionData): Promise<void> => {
  try {
    const {prisma} = await import("../db/db")
    await prisma.session.create({
      data: {
        sessionToken,
        authId,
        valid,
        userAgent,
        ipAddress,
      },
    })
  } catch (error) {
    console.error(error)
    throw new Error("Failed to create session")
  }
}

export {insertSession}
