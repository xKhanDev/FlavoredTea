import React from "react";
import { BsCupHot, BsCupStraw } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import lovecoffe2 from "../../public/images/lovecoffe2.png";

const MainSection = () => {
  return (
    <section className="mt-4 md:mt-0 w-full h-screen p-4 lg:flex md:flex">
      <div className="h-1/2 flex justify-center md:hidden lg:hidden">
        <img src={lovecoffe2} className="" />
      </div>
      <div className="h-1/2 *:capitalize flex flex-col justify-center items-center gap-2 -mt-20 lg:w-1/2 lg:h-full lg:justify-center lg:items-start">
        <span className="text-3xl font-bold lg:text-6xl">Coffe</span>
        <span className="text-3xl font-bold lg:text-6xl">The best for you</span>
        <button className="w-1/4 text-center p-2 bg-meron text-white rounded-3xl mt-2 hover:bg-white hover:text-black">
          View Menu
        </button>
        <div className="flex items-center *:text-6xl gap-6 mt-8 *:text-meron *:bg-white *:rounded-lg *:p-2">
          <BsCupHot />
          <CiCoffeeCup />
          <BsCupStraw />
          <GiCupcake />
        </div>
      </div>
      <div className="hidden w-1/2 h-full md:flex -mt-12">
        <img src={lovecoffe2} className="size-full" />
      </div>
    </section>
  );
};

export default MainSection;
