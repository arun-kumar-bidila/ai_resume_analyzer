import React, { useContext } from "react";
import assets from "../../assets/assets";
import { AuthContext } from "../../../context/AuthContext";
import { User } from "lucide-react";
const Navbar = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="flex justify-center bg-white ">
      {/*left section*/}

      <div className="w-7xl flex flex-row justify-between py-1 px-10 items-center">
        <div className="flex flex-row items-center">
          <img
            className="w-20 rounded-2xl"
            src={assets.resume_logo}
            alt="resume logo"
          />
          <p className="text-2xl font-medium text-cyan-800">Resume Analyzer</p>
        </div>
        <div className="flex flex-row gap-2">
          <User size={28} className="text-cyan-800 cursor-pointer" />
          <p className="text-2xl font-medium ">
            Welcome <span className="text-cyan-800">{authUser?.name}</span>
          </p>
          {/*right section*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
