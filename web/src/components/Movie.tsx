import * as Popover from "@radix-ui/react-popover";
import poster from '../assets/avengers.jpg'

export function Movie() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <img width={150} src={poster} alt="Poster" className="rounded-md"/> 
        <span className='font-extrabold text-1xl'>
          Avengers: Infinity War
        </span>
        </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='mt-1 font-extrabold leading-tight text-2xl'>Avengers: Infinity War</span>
          
          <span className='font-semibold text-zinc-400'>Produção: </span>
          <span className='font-semibold text-zinc-400'>Direção: </span>
          <span className='font-light text-zinc-400 w-96'>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.</span>
            
          <Popover.Arrow className='fill-zinc-900' height={8} width={16}/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}