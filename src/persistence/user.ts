import {User} from "@prisma/client"
import {GetUser} from "../types"

const getUsers = async (): Promise<GetUser[]> => {
  try {
    const {prisma} = await import("../db/db")
    return await prisma.user.findMany({
      select: {id: true, email: true, name: true},
    })
  } catch (error) {
    console.error(error)
    throw new Error("error getting users")
  }
}

const insertNewUser = async ({
  email,
  hashedPassword,
  name,
}: {
  email: string
  hashedPassword: string
  name: string
}): Promise<GetUser> => {
  try {
    const {prisma} = await import("../db/db")
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {id: true, email: true, name: true},
    })
    return user
  } catch (error) {
    console.error(error)
    throw new Error("error creating user")
  }
}

const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const {prisma} = await import("../db/db")
    const user = await prisma.user.findFirst({
      where: {email},
    })
    return user
  } catch (error) {
    console.error(error)
    throw new Error("error getting user by email")
  }
}
const getUserById = async (id: number): Promise<GetUser> => {
  try {
    const {prisma} = await import("../db/db")
    const user = await prisma.user.findFirst({
      where: {id},
      select: {id: true, email: true, name: true},
    })
    return user
  } catch (error) {
    console.error(error)
    throw new Error("error getting user by email")
  }
}

export {getUsers, insertNewUser, getUserByEmail, getUserById}
