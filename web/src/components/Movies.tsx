import { CaretLeft, CaretRight } from "phosphor-react";
import { useContext, useEffect } from "react";
import { Movie } from "./Movie";
import { api } from "../lib/axios"
import { MovieContext } from "../App";

function Movies() {  
  const { movies, setMovies } = useContext(MovieContext)

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovies(response.data)
    })
  }, [])

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