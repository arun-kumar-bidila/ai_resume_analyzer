import React from "react";

const HomeMain = () => {
  return (
    <div className="flex justify-center">
    <div className="w-7xl flex flex-row justify-between py-10 px-20 items-center  ">
      {/*left section*/}

      <div className="flex flex-col items-start gap-2 ">
        <p className="text-4xl font-medium text-white">My Resumes</p>
        <p className="font-medium text-white">
          Manage and optimize your CVs to land your job
        </p>
      </div>
      <div>
        <button className="bg-white border border-black rounded-2xl px-2 py-2 cursor-pointer">
          Create New Feedback
        </button>
        {/*right section*/}
      </div>
    </div>
    </div>
  );
};

export default HomeMain;
