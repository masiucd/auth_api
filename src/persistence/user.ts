import {User} from "@prisma/client"
import {prisma} from "../db/db"

const getUsers = async (): Promise<User[]> => {
  try {
    return await prisma.user.findMany()
  } catch (error) {
    console.error(error)
    throw new Error("error getting users")
  }
}

const registerUser = async ({
  email,
  hashedPassword,
  name,
}: {
  email: string
  hashedPassword: string
  name: string
}): Promise<User> => {
  try {
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
export {getUsers, registerUser}
