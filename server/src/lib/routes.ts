import { FastifyInstance } from 'fastify';
import { prisma } from '../../prisma';
import { api } from './axios';

interface Movie {
  id: number
  title: string
  poster_path: string
  overview: string
  producer: string | null
  director: string
}

interface GetMoviesResponse {
  results: Movie[]
}

interface GetMovieCrew {
  credits: {
    crew: {
      job: string
      name: string
    }[]
  }
}

export async function appRoutes(app: FastifyInstance) {
  app.get('/movies', () => prisma.movie.findMany({ take: 10 }));

  app.post('/updateCatalog', async (_request, reply) => {
    try {
      const randomPage = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
      const response = await api.get<GetMoviesResponse>(`${process.env.MOVIE_API_BASE_URL}/popular?&page=${randomPage}`);
      const { results } = response.data;

      const values = await Promise.all(results.map(async (result) => {
        const { data } = await api.get<GetMovieCrew>(
          `${process.env.MOVIE_API_BASE_URL}/${result.id}?append_to_response=credits`,
        );

        const director = data.credits.crew.find(({ job }) => job === 'Director');
        const producer = data.credits.crew.find(({ job }) => job === 'Producer');

        return ({
          title: result.title,
          poster: result.poster_path,
          description: result.overview,
          external_id: result.id,
          director: director?.name,
          producer: producer?.name,
        });
      }));

      await prisma.$transaction([
        prisma.movie.deleteMany(),
        prisma.movie.createMany({ data: values }),
      ]);

      reply.send();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
