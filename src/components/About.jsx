import React from "react";
import lovecoffe3 from "../../public/images/lovecoffe3.png";

const About = () => {
  return (
    <div className="w-full flex flex-col-reverse p-4 mt-8 lg:flex-row lg:items-center lg:mt-24 lg:p-4">
      <div className="w-full flex flex-col gap-2 mt-4 lg:w-1/2">
        <span className="font-bold text-lg">
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
      </div>
      <div className="flex justify-center lg:w-1/2 ">
        <img src={lovecoffe3} alt="Tea image " className="w-64 lg:w-96" />
      </div>
    </div>
  );
};

export default About;
