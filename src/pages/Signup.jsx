import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignUpNav from "../components/SignUpNav";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../features/api/authApi";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const nav = useNavigate();

  const [signup] = useSignupMutation();

  const signUpHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const { data } = await signup(user);
      if (data?.success === true) {
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignUpNav />
      <div className="w-full h-full">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/ba1ac8c8-122c-41c8-ace9-4f970749bb89/MM-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="absolute bg-black/60 top-0 left-0 w-full h-full"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[630px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold mb-10">Sign up</h1>
              <form onSubmit={signUpHandler} className="flex flex-col gap-10">
                <div className="flex flex-col space-y-8">
                  <input
                    className="w-full bg-[#333] px-5 py-3 rounded"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full bg-[#333] px-5 py-3 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full bg-[#333] px-5 py-3 rounded focus:border-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="w-full bg-[#333] px-5 py-3 rounded"
                    type="password"
                    placeholder="Confirm your password"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <button className="w-full px-4 py-3 bg-[#e50914] rounded font-semibold text-lg transition hover:opacity-70 active:scale-95">
                    Sign up
                  </button>
                  <div className="flex justify-between">
                    <p className="text-[#b3b3b3] text-sm">
                      <input className=" w-3 h-3 mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p className="text-[#b3b3b3] text-sm">Need Help?</p>
                  </div>
                  <p>
                    <span className="text-sm text-[#b3b3b3]">
                      Already subscribed to Netflix?
                    </span>{" "}
                    <Link to={"signin"}>
                      <span className="transition duration-[.4s] hover:underline">
                        Sign In
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
