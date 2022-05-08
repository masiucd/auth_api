import express from "express"
import {Routes} from "./routes"
import cookieParser from "cookie-parser"
import "module-alias/register"

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SIGNATURE ?? "dev-cookie-signature"))

Routes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`)
})
