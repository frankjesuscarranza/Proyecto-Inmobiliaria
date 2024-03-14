import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="w-[100%] m-auto pt-6">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-700`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}>
          {slides.map((s) => {
            return <img src={s} />;
          })}
        </div>

        <div className="absolute top-2 h-full w-full justify-between items-center align-items flex text-white px-2 text-4xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full"></div>
      </div>
    </div>
  );
}
