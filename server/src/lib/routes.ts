import { FastifyInstance } from "fastify";
import { prisma } from "../../prisma";

export async function appRoutes(app: FastifyInstance) {
  app.get('/movies', async (request) => {
    return await prisma.movie.findMany()
  })
}
