import {User} from "@prisma/client"

export type GetUser = Pick<User, "id" | "email" | "name"> | null
