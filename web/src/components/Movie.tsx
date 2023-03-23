import * as Popover from "@radix-ui/react-popover";
interface MovieProps {
  title?: String
  poster?: String
  description?: String
  producer?: String | undefined
  director?: String
}

export function Movie({title, poster, description, director, producer}:MovieProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <img width={150} src={`https://image.tmdb.org/t/p/w200${poster}`} alt="Poster" className="rounded-md"/> 
        <span className='font-extrabold text-1xl'>
          {title}
        </span>
        </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='mt-1 font-extrabold leading-tight text-2xl'>{title}</span>
          
          <span className='font-semibold text-zinc-400'>Producer: {producer}</span>
          <span className='font-semibold text-zinc-400'>Director: {director}</span>
          <span className='font-light text-zinc-400 w-96'>
            {description}
          </span>
          <Popover.Arrow className='fill-zinc-900' height={8} width={16}/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}