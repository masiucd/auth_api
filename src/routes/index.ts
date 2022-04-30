import type {Express} from "express"
import {userRoute} from "./user"

const Routes = (app: Express): void => {
  app.use("/api/users", userRoute)
  // app.use("/api/shoes", userRoute)
}

export {Routes}
