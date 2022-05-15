type ResponseReturnType = Promise<Response<unknown, Record<string, unknown>>>
type GetUser = Pick<User, "id" | "email" | "name"> | null
