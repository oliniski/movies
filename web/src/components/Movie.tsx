import * as Popover from "@radix-ui/react-popover";
import noPoster from '../assets/no-poster.jpg'

interface MovieProps {
  title: string
  poster: string
  description: string
  producer: string | null
  director: string
}

export function Movie({title, poster, description, director, producer}:MovieProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <object data={`https://image.tmdb.org/t/p/w200${poster}`} className="rounded-md" type="image/png" width={200} height={280}>
          <img src={noPoster} alt="Poster" className="rounded-md" width={200} height={280}/>
        </object>
        <div className="min-w-0 max-w-[200px] mt-3">
          <span className='text-1xl line-clamp-2 text-center'>
            {title}
          </span>
        </div>
        
        </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] max-w-[500px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='mt-1 font-extrabold leading-tight text-2xl line-clamp-3'>{title}</span>
          
          <span className='font-semibold text-zinc-400 mt-3'>Director: {director}</span>
          <span className='font-semibold text-zinc-400'>Producer: {producer}</span>
          <span className='font-light text-zinc-400 w-96 mt-2 line-clamp-6'>
            {description}
          </span>
          <Popover.Arrow className='fill-zinc-900' height={8} width={16}/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}