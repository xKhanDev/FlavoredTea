import React from "react";
import { motion } from "framer-motion";
import { BsCupHot, BsCupStraw } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import lovecoffe2 from "../../public/images/lovecoffe2.png";

const MainSection = () => {
  return (
    <section className="mt-4 w-full h-screen p-4 lg:flex md:flex md:h-1/2 md:justify-center md:mt-10 md:items-center md:mb-6 lg:mt-0">
      {/* ------------------------- top coffee cup image in mobile view------------------ */}
      <div className="h-1/2 flex justify-center md:hidden lg:hidden">
        <img src={lovecoffe2} className="" />
      </div>
      {/* ------------------------- left side contents------------------ */}
      <div className="h-1/2 *:capitalize flex flex-col justify-center items-center gap-2 -mt-20 lg:w-1/2 lg:h-full lg:justify-center lg:items-start md:items-start">
        <span className="text-3xl font-bold lg:text-6xl text-meron">Coffe</span>
        <span className="text-3xl font-bold lg:text-6xl text-meron">
          The best for you
        </span>
        <motion.button
          className="w-32 md:w-1/3 text-center p-2 bg-meron text-white rounded-3xl mt-2 hover:bg-white hover:text-black hover:shadow-md hover:shadow-black"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
        >
          View Menu
        </motion.button>
        <div className="flex items-center *:text-6xl gap-6 mt-8 *:text-meron *:bg-white *:rounded-lg *:p-2">
          <BsCupHot />
          <CiCoffeeCup />
          <BsCupStraw />
          <GiCupcake />
        </div>
      </div>
      {/* ------------------------- web right side image of coffe------------------ */}
      <div className="hidden w-1/2 h-full md:flex md:h-1/2 md:mt-0 -mt-12 lg:h-screen">
        <img src={lovecoffe2} className="size-full" />
      </div>
    </section>
  );
};

export default MainSection;
