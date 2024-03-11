import React from "react";
import { BsCupHot, BsCupStraw } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import greentea from "../../public/images/greentea.png";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { FaApple } from "react-icons/fa";

const AppSection = () => {
  return (
    <div className="flex flex-col w-full h-screen p-2 items-center mt-14 lg:flex-row lg:gap-12 lg:my-8">
      <div className="w-1/2 h-96 bg-white rounded-lg p-3 flex flex-col gap-3 *:cursor-default mb-4 lg:w-1/4 lg:h-screen">
        <h2 className="font-bold text-2xl lg:mt-6">Coffee</h2>
        <button className="w-36 text-center bg-meron text-white rounded-3xl p-1">
          Learn More
        </button>
        <div className="flex justify-between *:text-2xl *:bg-black *:text-white *:p-1 *:rounded-lg mt-2 lg:*:size-9 lg:mt-4">
          <BsCupHot />
          <CiCoffeeCup />
          <BsCupStraw />
          <GiCupcake />
        </div>
        {/* --------------- cards--------------------- */}
        <div className="w-full flex justify-center gap-2 mt-7 *:cursor-text">
          <div className="w-52 h-48 flex flex-col justify-center bg-meron rounded-3xl mt-4 *:text-white p-2">
            <img src={greentea} className="size-28 my-0 mx-auto -mt-8" />
            <h2 className="font-bold">Americona</h2>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="mt-2 flex justify-center gap-8 *:bg-black *:text-white *:size-6 *:p-1 *:rounded-xl">
              <MdOutlineShoppingCart />
              <MdOutlineFavoriteBorder />
            </div>
            <div className="flex justify-center items-center">
              <button className="w-20 text-center bg-white text-meron rounded-2xl p-2 text-xs mt-6 cursor-text">
                $7.50
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3 mt-8 bg-gray-300 rounded-xl p-2">
          <h2 className="font-bold text-xl">Maccaccino</h2>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellat necessitatibus
          </p>
        </div>
        <div className="hidden lg:flex justify-between p-3 bg-meron rounded-3xl *:text-2xl text-white mt-4">
          <AiOutlineHome />
          <LuShoppingCart />
          <FaRegUser />
          <CgMenuRight />
        </div>
      </div>
      <div className=" w-full mt-4 flex flex-col gap-3 lg:w-1/2">
        <h2 className="text-2xl font-bold">App is Available</h2>
        <p className="text-balance text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magni repudiandae nulla provident, cupiditate tenetur sunt vel ipsum
          officia asperiores tempora blanditiis in aspernatur ea corrupti itaque
          ex animi dignissimos?
        </p>
        <div className="flex gap-6 *:text-5xl *:p-2 *:bg-white *:rounded-lg">
          <FaApple />
          <IoLogoGooglePlaystore />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
