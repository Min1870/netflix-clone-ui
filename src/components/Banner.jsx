import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { FaPlay } from "react-icons/fa";
import {HiInformationCircle} from "react-icons/hi"

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const fetchData = async () => {
    const { data } = await axios.get(requests.fetchTrending);
    // console.log(data.results);
    setMovies(data.results);
  };
  // console.log(movie);

  useEffect(() => {
    fetchData();
  }, []);

  // const truncateString = (str, num) => {
  //   if (str?.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className=" absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" flex flex-col space-y-5 absolute w-full top-[30%] md:top-[20%] lg:top-[15%] p-4 md:p-8">
          <h2 className=" text-3xl md:text-5xl lg:text-7xl font-bold">
            {movie?.title}
          </h2>
          <p className="  w-full md:max-w-[70%] lg:max-w-[65%] text-gray-200 text-xs md:text-lg">
            {movie?.overview}
          </p>
          <div className="flex space-x-3">
            <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
            <button className="bannerButton bg-[gray]/70">More Info <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
