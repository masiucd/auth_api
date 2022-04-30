import express from "express"
import {prisma} from "./db/db"
import bcrypt from "bcryptjs"
import {Routes} from "./routes"

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/api/shoes", async (_, res) => {
  const shoes = await prisma.shoe.findMany()
  res.send({shoes})
})

app.post("/api/signup", async (req, res) => {
  const {email, password, name} = req.body
  if (!email || !password || !name) return res.send({error: "missing fields"})

  // check if email exists in db
  const userByEmail = await prisma.user.findFirst({where: {email}})
  if (userByEmail) return res.send({error: "email already exists"})

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })
  res.header("Content-Type", "application/json")
  res.send({user, message: "user created", status: 200})
})

Routes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`)
})
