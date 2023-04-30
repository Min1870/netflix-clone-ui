import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Movies from "./Movies";

const Row = ({  title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(fetchUrl);
    // console.log(data.results);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  

  const slider = useRef();

  const slideLeft = () => {
    slider.current.scrollLeft -= 500
  } 

  const slideRight = () => {
    slider.current.scrollLeft += 500
  }
  

  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FiChevronLeft
          onClick={slideLeft}
          size={40}
          className="text-white left-2 rounded-full absolute transition opacity-0 hover:scale-125 cursor-pointer z-10 group-hover:opacity-100"
        />
        <div
          ref={slider}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movies key={id} item={item} />
          ))}
        </div>
        <FiChevronRight
          onClick={slideRight}
          size={40}
          className="text-white right-2 rounded-full absolute opacity-0 hover:scale-125 cursor-pointer z-10 group-hover:opacity-100"
        />
      </div>
    </>
  );
};

export default Row;
