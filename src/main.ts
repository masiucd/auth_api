import express from "express"
import {Routes} from "./routes"

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

Routes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`)
})
