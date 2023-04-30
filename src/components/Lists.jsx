import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import Cookies from "js-cookie";

const Lists = ({ item, movieList, setMovieList }) => {
  const [like, setLike] = useState(false);
  console.log(item);

  const removeFromList = () => {
    const updatedLists = movieList.filter((list) => list.id !== item.id);
    setMovieList(updatedLists);
    Cookies.set("list", JSON.stringify(updatedLists), { expires: 7 });
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block select-none"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className=" absolute top-0 left-0 w-full h-full transition duration-200 hover:bg-[#141414]/80 opacity-0 hover:opacity-100 text-white">
        <p className=" select-none whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        <p onClick={removeFromList} className="absolute top-0 right-0">
          <CiCircleRemove size={30} />
        </p>
      </div>
    </div>
  );
};

export default Lists;
