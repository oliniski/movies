import './styles/global.css'

import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { Header } from './components/Header'
import { Movies } from './components/Movies'

type Movie = {
  id: number
  title: string
  poster: string
  description: string
  director: string
  producer: string
}
interface MovieContextProps {
  movies: Movie[],
  setMovies: Dispatch<SetStateAction<any>>
}

export const MovieContext = createContext<MovieContextProps>({} as MovieContextProps)

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  
  return (
    <MovieContext.Provider value={{movies, setMovies}}>

      <div className='w-screen h-screen flex justify-center items-center'>
        <div className="w-full max-w-full px-6 flex flex-col gap-16">
          <Header />
          
          <Movies />
        </div>
      </div>
    </MovieContext.Provider>
  )
}

export default App
