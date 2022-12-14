import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'

const port = Number(process.env.API_PORT) || 4000

const server = createServer()

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
