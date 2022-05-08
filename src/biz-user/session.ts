import {randomBytes} from "crypto"
import {insertSession} from "../persistence/session"

interface ConnectionInfo {
  ipAddress: string
  userAgent: string
}
const createSession = async (userId: number, connection: ConnectionInfo): Promise<string> => {
  try {
    const sessionToken = randomBytes(32).toString("hex")
    const {ipAddress, userAgent} = connection
    insertSession({ipAddress, userAgent, valid: true, sessionToken, authId: userId})
    return sessionToken
  } catch (error) {
    console.error(error)
    throw new Error("Failed to create session")
  }
}

export {createSession}
