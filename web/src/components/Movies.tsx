import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { api } from "../lib/axios"

type Movie = {
  id: number
  title: string
  poster: string
  description: string
  director: string
  producer: string
}[]

export function Movies() {
  const [ movie, setMovie ] = useState<Movie>([])

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <button title="Previous" className="rounded-full px-5 py-0 items-center active:text-tomato11">
          <CaretLeft />
        </button>
        
      <div className="grid grid-rows-1 grid-cols-10 gap-5">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
        <button title="Next" className="rounded-full px-5 py-3 items-center active:text-tomato11">
          <CaretRight />
        </button>
    </div>
  )
}