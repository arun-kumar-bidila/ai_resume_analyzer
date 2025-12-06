import React from "react";
import assets from "../assets/assets";

const Login = () => {
  return (
    <div className="flex flex-row justify-evenly">
      {/* left section*/}
      <div className="py-20">
        <div className="flex flex-row gap-5 items-center ">
          <img
            className="w-15 rounded-2xl "
            src={assets.resume_logo_bg}
            alt="logo"
          />
          <p className="font-medium text-white text-4xl">Resume Analyzer</p>
        </div>

        <div className="px-5 ">
          {/*heading section in left*/}
          <div className="flex flex-col mt-20 gap-5">
            <p className="text-white font-bold text-5xl">
              Create Your free account
            </p>
            <p className="text-white text-1xl">
              Join 10,000+ professional optimizing their careers
            </p>
          </div>
          {/*form section*/}
          <form className="mt-5 flex flex-col items-start">
            <p className="text-white">Name</p>
            <input
              className="border-2 border-black px-2 py-2 items-center rounded-2xl bg-white my-2 w-100"
              type="text"
              placeholder="Enter Your Full Name"
            />
            <p className="text-white">Email</p>
            <input
              className="border-2 border-black px-2 py-2 items-center rounded-2xl bg-white my-2 w-100"
              type="email"
              placeholder="Enter Your Email"
            />
            <p className="text-white">Password</p>
            <input
              className="border-2 border-black px-2 py-2 items-center rounded-2xl bg-white my-2 w-100"
              type="password"
              placeholder="Enter Your Password"
            />
            <button className="w-100 mt-10 px-5 py-2 bg-linear-to-br from-[#1F5A5A] to-black rounded-2xl text-white font-medium border border-white">
              Register
            </button>
            <div className="mt-5">
              <p className="text-white">
                Already have an Account ?
                <span className="text-amber-500 font-medium ml-2">Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* right section*/}

      <div className="flex items-center justify-center">
        <img src={assets.full_logo} className="w-100 rounded-2xl " alt="" />
      </div>
    </div>
  );
};

export default Login;
