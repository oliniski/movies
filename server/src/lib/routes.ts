// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';
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
  app.get('/movies', async (request, reply) => {
    const getMovieParams = z.object({
      page: z.string(),
    });

    const { page } = getMovieParams.parse(request.query);

    const skip = parseInt(page, 10) * 10;

    const movies = await prisma.movie.findMany({ skip, take: 10 });
    reply.send(movies);
  });

  app.post('/updateCatalog', async (_request, reply) => {
    try {
      const movies:Movie[] = [];

      do {
        const randomPage = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
        // eslint-disable-next-line no-await-in-loop
        const response = await api.get<GetMoviesResponse>(`${process.env.MOVIE_API_BASE_URL}/popular?&page=${randomPage}`);
        const { results } = response.data;

        results.forEach((result) => {
          movies.push(result);
        });
      } while (movies.length < 50);

      const slicedMovies = movies.slice(0, -10);

      const values = await Promise.all(slicedMovies.map(async (result) => {
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
