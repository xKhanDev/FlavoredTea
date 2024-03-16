import React from "react";
import { motion } from "framer-motion";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import app from "../../public/images/app.png";

const AppSection = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen p-2 items-center mt-10 md:flex-row md:h-1/2 lg:flex-row lg:-mt-2 md:mb-10">
      {/* ------------------------- left side mobile app view image------------------ */}
      <motion.div
        className="w-full h-1/2 px-6 md:w-1/2 md:full lg:w-1/2 lg:h-screen"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <img src={app} alt="mobile app images" className="" />
      </motion.div>
      {/* ------------------------- right side content and App Store/Apple Store logos --------------------- */}
      <motion.div
        className="mt-6 w-full h-1/2 flex flex-col gap-3 md:w-1/2 md:full lg:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-meron">App is Available</h2>
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
      </motion.div>
    </div>
  );
};

export default AppSection;
