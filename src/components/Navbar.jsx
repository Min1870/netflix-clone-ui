import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../features/api/authApi";
import { removerUser } from "../features/services/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch();
  const nav = useNavigate();

  // console.log(isScrolled);

  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");

  // const user = useSelector((state) => state.authSlice.user)
  // console.log(user)

  const [logout] = useLogoutMutation();

  const logOutHandler = async (e) => {
    e.preventDefault();
    const { data } = await logout(token);
    dispatch(removerUser());
    if (data?.success) nav("/login");
    console.log(data);
  };

  return (
    <header className={`${isScrolled && "bg-[#141414]"} z-[100]`}>
      <div className=" flex items-center text-white space-x-2 md:space-x-10">
        <Link to={"/"}>
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">News & Popular</li>
          <Link to={"/mylist"}>
            <li className="headerLink">My List</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch className="text-white sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <AiFillBell className="h-6 w-6 text-white" />

        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
        <p className="text-white flex gap-3 bg-black/50 px-2 py-1 rounded">
          <span>{user?.name}</span>
          <span>{user?.email}</span>
        </p>
        <Link>
          <button
            onClick={logOutHandler}
            className="px-4 py-2 bg-[#e50914] rounded font-semibold text-white"
          >
            Log Out
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
