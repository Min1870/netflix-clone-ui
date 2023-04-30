import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Lists from "../components/Lists";
import { useRef } from "react";
import Cookies from "js-cookie";
import Empty from "../components/Empty";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const MyList = () => {
  // const lists = JSON.parse(Cookies.get("list"));
  // console.log(lists);
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    const favLists = Cookies.get("list");

    if (favLists) {
      const lists = JSON.parse(favLists);
      setMovieLists(lists);
    } else {
      setMovieLists([]);
    }
  }, []);

  const slider = useRef();

  const slideLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    slider.current.scrollLeft += 500;
  };

  return (
    <>
    <Navbar/>
    <div className=" absolute mt-20">
      <h2 className=" text-white font-bold md:text-xl p-4">MyList</h2>
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
          {movieLists.map((list) => (
            <Lists
              key={list.id}
              item={list}
              movieList={movieLists}
              setMovieList={setMovieLists}
            />
          ))}
        </div>
        <FiChevronRight
          onClick={slideRight}
          size={40}
          className="text-white right-2 rounded-full absolute opacity-0 hover:scale-125 cursor-pointer z-10 group-hover:opacity-100"
        />
      </div>
    </div>
    </>
  );
};

export default MyList;
