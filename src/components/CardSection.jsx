import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { DataContext } from "../App";

const CardSection = () => {
  const jsonData = useContext(DataContext);
  const filterData = jsonData.products
    .sort((a, b) => b.price - a.price)
    .slice(0, 2);

  return (
    <section className="w-full flex flex-col p-2 -mt-8 lg:flex-row lg:-mt-20 lg:items-center">
      {/* ------------------------- left side content------------------ */}
      <motion.div
        className="w-full flex flex-col justify-center gap-12 md:flex-row lg:flex-row"
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        {/* ------------------------- left side cards------------------ */}
        {filterData.map((product) => {
          return (
            <div className="" key={product.id}>
              <div>
                <img src={product.image} className="w-36 z-10 my-0 mx-auto" />
              </div>

              <div className="size-52 rounded-3xl bg-gray-300 p-2 flex flex-col justify-center gap-1 -mt-12 my-0 mx-auto">
                <h2 className="text-meron font-semibold text-lg mt-20">
                  {product.name}
                </h2>
                <span className="text-balance text-xs">
                  {product.description}
                </span>
                <div className="flex gap-8 mx-auto my-2 *:bg-white *:size-8 *:p-1 *:rounded-xl *:cursor-pointer">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
                    className="flex justify-center items-center text-lg"
                  >
                    <MdOutlineShoppingCart />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
                    className="flex justify-center items-center text-lg"
                  >
                    <MdOutlineFavoriteBorder />
                  </motion.button>
                </div>
                <motion.button
                  className="bg-meron rounded-2xl text-white w-20 p-2 my-0 mx-auto hover:text-black hover:bg-white hover:shadow-md hover:shadow-black"
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
                >
                  ${product.price}
                </motion.button>
              </div>
            </div>
          );
        })}
      </motion.div>
      {/* ------------------------- right side content------------------ */}
      <motion.div
        className="w-full mt-10 p-4"
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <span className="font-bold text-lg capitalize text-meron">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          asperiores.
        </span>
        <p className="text-balance text-sm mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          consequuntur facilis dolore quo illo esse modi perspiciatis suscipit,
          amet id quas cupiditate ipsum eveniet repellat debitis quam sunt
          consequatur possimus?
        </p>
        <div className="flex justify-center lg:justify-start">
          <motion.button
            className="w-28 text-center mt-6 bg-meron text-white rounded-2xl p-2 hover:text-black hover:bg-white hover:shadow-md hover:shadow-black"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CardSection;
