import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import app from "../../public/images/app.png";

const AppSection = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen p-2 items-center mt-10 lg:flex-row lg:-mt-2">
      <div className="w-full h-1/2 px-6 lg:w-1/2 lg:h-screen">
        <img src={app} alt="mobile app images" className="" />
      </div>
      <div className=" w-full mt-4 flex flex-col gap-3 lg:w-1/2">
        <h2 className="text-2xl font-bold">App is Available</h2>
        <p className="text-balance text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magni repudiandae nulla provident, cupiditate tenetur sunt vel ipsum
          officia asperiores tempora blanditiis in aspernatur ea corrupti itaque
          ex animi dignissimos?
        </p>
        <div className="flex gap-6 *:text-5xl *:p-2 *:bg-white *:rounded-lg *:cursor-pointer">
          <FaApple />
          <IoLogoGooglePlaystore />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
