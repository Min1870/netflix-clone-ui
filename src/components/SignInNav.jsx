import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignInNav = () => {
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

  // console.log(isScrolled);

  return (
    <header className={`${isScrolled && "bg-[#141414]"} z-[100]`}>
      <div className=" flex items-center text-white space-x-2 md:space-x-10">
        <Link to={"/signup"}>
          <img
            src="https://rb.gy/ulxxee"
            width={200}
            height={200}
            className="cursor-pointer object-contain"
          />
        </Link>
        
      </div>
      
    </header>
  );
};

export default SignInNav;
