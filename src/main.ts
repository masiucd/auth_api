import Fastify, {FastifyInstance, RouteShorthandOptions} from "fastify"

const server: FastifyInstance = Fastify({})
import {prisma} from "./db/db"

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
}

server.get("/api/shoes", opts, async (request, reply) => {
  const shoes = await prisma.shoe.findMany()
  console.log({shoes})
  return {pong: "it worked!"}
})

const start = async (): Promise<void> => {
  try {
    await server.listen(3000)

    const address = server.server.address()
    const port = typeof address === "string" ? address : address?.port
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`server listening on ${port} 🚀`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
void start()
