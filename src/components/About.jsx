import React from "react";
import { motion } from "framer-motion";
import lovecoffe3 from "../../public/images/lovecoffe3.png";

const About = () => {
  return (
    <section className="w-full flex flex-col-reverse p-4 mt-8 lg:flex-row lg:items-center lg:mt-24 lg:p-4">
      <motion.div
        className="w-full flex flex-col gap-2 mt-4 lg:w-1/2"
        initial={{
          opacity: 0,
          x: -50,
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          facilis? Omnis illum eius tempora eveniet veniam corporis vel atque
          reiciendis?
        </span>
        <p className="text-balance text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit
          quasi aliquid veritatis cum, voluptatibus ratione consectetur delectus
          animi nostrum molestias, quisquam adipisci maxime distinctio rem neque
          tempora eveniet autem?
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="w-28 text-center mt-6 bg-meron text-white rounded-2xl p-2 hover:text-black hover:bg-white hover:shadow-md hover:shadow-black">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center lg:w-1/2 "
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
        <img src={lovecoffe3} alt="Tea image " className="w-64 lg:w-96" />
      </motion.div>
    </section>
  );
};

export default About;
