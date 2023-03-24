import { CaretLeft, CaretRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Movie } from "./Movie";
import { api } from "../lib/axios"
import { MovieContext } from "../App";

function Movies() {  
  const { movies, setMovies } = useContext(MovieContext)
  const [ page, setPage ] = useState(0)

  function handlePreviousPage() {
    if (page === 0) {
      setPage(9)
      return
    }
    setPage(page - 1)
  }

  function handleNextPage() {
    if (page === 9) {
      setPage(0)
      return
    }
    setPage(page + 1)
  }

  useEffect(() => {
    api.get('/movies', { params: {
      page
    }}).then(response => {
      setMovies(response.data)
    })
  }, [page])

  return (
    <div className="w-full flex flex-row m-auto">
      <button 
        onClick={handlePreviousPage}
        title="Previous" 
        className="rounded-full px-5 items-center active:text-tomato11"
      >
        <CaretLeft />
      </button>
      <div className="flex flex-wrap gap-5 items-start justify-center max-w-[1100px] m-auto">
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
        <button onClick={handleNextPage} title="Next" className="rounded-full px-5 items-center active:text-tomato11">
          <CaretRight />
        </button>
    </div>
  )
}

export { Movies }