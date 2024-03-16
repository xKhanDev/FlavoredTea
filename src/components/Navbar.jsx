import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../public/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [openManu, setOpenManu] = useState(false);
  return (
    <nav className="w-full items-center lg:flex lg:justify-between z-40">
      {/* ------------------------- Mobile menu cross icon------------------ */}
      <div className="absolute top-5 left-5 lg:hidden z-50">
        {openManu ? (
          <motion.button
            className="btn btn-circle btn-outline bg-white p-1 flex justify-center items-center rounded-full size-12"
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            onClick={() => setOpenManu(!openManu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        ) : (
          //------------------------- Mobile menu hamburger icon------------------
          <motion.span
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
            onClick={() => setOpenManu(!openManu)}
            className="text-3xl cursor-pointer"
          >
            <RxHamburgerMenu className="bg-white p-2 rounded-md flex justify-center items-center size-11" />
          </motion.span>
        )}
      </div>
      {/* ------------------------- Mobile menu------------------ */}
      {openManu && (
        <motion.div
          className="absolute top-0 w-1/2 h-screen px-5 bg-meron p-2 flex items-center md:flex md:left-0 lg:hidden"
          initial={{ opacity: 0, x: -300 }}
          animate={openManu ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
          transition={{ duration: 0.4 }}
        >
          <motion.ul
            className="w-full flex flex-col items-left justify-between gap-1 *:text-lg *:text-white *:w-full"
            initial={{ opacity: 0, x: -300 }}
            animate={openManu ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 0.6 }}
          >
            <li className="p-2 hover:bg-black hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="p-2 hover:bg-black hover:text-white">
              <a href="#">Coffe Menu</a>
            </li>
            <li className="p-2 hover:bg-black hover:text-white">
              <a href="#">About Us</a>
            </li>
            <li className="p-2 hover:bg-black hover:text-white">
              <a href="#">Contact Us</a>
            </li>
            <motion.li
              className="mt-8 p-2 rounded-3xl bg-red-900 text-white cursor-pointer w-36 text-center hover:bg-white hover:text-black"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
            >
              Coffe Shop
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
      {/* ------------------------- Navigation logos------------------ */}
      <div className="*:text-white">
        <span className="w-full flex items-center justify-center text-3xl font-bold gap-2 mt-5 lg:justify-start lg:mt-0 lg:w-1/2 ">
          Flavored <img src={logo} alt="logo" className="size-9" />
        </span>
        <p className="hidden lg:flex">Wake up for something Special</p>
      </div>

      {/* -----------------------------web manu-------------------------------------- */}
      <div className="hidden lg:flex w-1/2 px-5 p-2 overflow-y-hidden">
        <ul className="w-full flex items-center justify-between gap-1 *:w-full *:text-center *:font-medium">
          <motion.li
            className="p-2 text-gray-200 hover:scale-105 hover:text-white"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <a href="#">Home</a>
          </motion.li>
          <motion.li
            className="p-2 text-gray-200 hover:scale-105 hover:text-white"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <a href="#">Coffe Menu</a>
          </motion.li>
          <motion.li
            className="p-2 text-gray-200 hover:scale-105 hover:text-white"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <a href="#">About Us</a>
          </motion.li>
          <motion.li
            className="p-2 text-gray-200 hover:scale-105 hover:text-white"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <a href="#">Contact Us</a>
          </motion.li>
          <motion.li
            className="p-2 rounded-3xl text-white bg-meron cursor-pointer w-36 text-center hover:bg-white hover:text-black hover:scale-105 hover:shadow-md hover:shadow-black"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.6 }}
          >
            Coffe Shop
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
