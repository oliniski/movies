import { CaretLeft, CaretRight } from "phosphor-react";
import { Movie } from "./Movie";

export function Movies() {
  return (
    <div className="w-full flex">
      <button title="Previous" className="rounded-full  px-5 py-0 items-center active:text-tomato11">
          <CaretLeft />
        </button>
        
      <div className="grid grid-rows-1 grid-cols-10 gap-3">
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