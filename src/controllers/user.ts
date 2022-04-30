import type {Request, Response} from "express"

const users = (req: Request, res: Response) => {
  res.send({users: "users"})
}

export {users}
