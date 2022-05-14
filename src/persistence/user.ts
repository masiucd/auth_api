import {User} from "@prisma/client"

const getUsers = async (): Promise<User[]> => {
  try {
    const {prisma} = await import("../db/db")
    return await prisma.user.findMany()
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
}): Promise<User> => {
  try {
    const {prisma} = await import("../db/db")
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
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
    const user = await prisma.user.findFirst({where: {email}})
    return user
  } catch (error) {
    console.error(error)
    throw new Error("error getting user by email")
  }
}
const getUserById = async (id: number): Promise<User | null> => {
  try {
    const {prisma} = await import("../db/db")
    const user = await prisma.user.findFirst({where: {id}})
    return user
  } catch (error) {
    console.error(error)
    throw new Error("error getting user by email")
  }
}

export {getUsers, insertNewUser, getUserByEmail, getUserById}
