import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { api } from "../lib/axios"

interface MoviesProps {
  find: boolean;
}

type Movie = {
  id: number
  title: string
  poster: string
  description: string
  director: string
  producer: string
}[]

function Movies({find}: MoviesProps) {
  const [ movies, setMovies ] = useState<Movie>([])

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovies(response.data)
    })
  }, [find])

  return (
    <div className="w-full flex">
      <button title="Previous" className="rounded-full px-5 py-0 items-center active:text-tomato11">
          <CaretLeft />
        </button>
      <div className="grid grid-rows-1 grid-cols-10 gap-5">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
              description={movie.description}
              producer={movie.producer}
              director={movie.director}
            />
          
        )})}
        
      </div>
        <button title="Next" className="rounded-full px-5 py-3 items-center active:text-tomato11">
          <CaretRight />
        </button>
    </div>
  )
}

export { Movies }