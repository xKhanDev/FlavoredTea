import React from "react";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full mt-10 flex flex-col p-4 bg-gray-400 lg:mt-20">
      {/* ----------------------------------------------------------------- */}
      <div className="w-full flex gap-2">
        {/* ---------------------------------web footer logo-------------------------------- */}
        <div className="hidden lg:flex flex-col lg:w-1/4 text-meron">
          <span className="w-full flex items-center justify-center text-3xl font-bold gap-2 mt-5 lg:justify-start lg:mt-0 lg:w-1/2">
            Flavored <img src={logo} alt="logo" className="size-9" />
          </span>
          <p className="hidden lg:flex">Wake up for something Special</p>
        </div>
        {/* --------------------------------footer links--------------------------------- */}
        <div className="w-1/3 lg:w-1/4">
          <label className="font-semibold capitalize">our services</label>
          <ul className="flex flex-col gap-2 *:cursor-pointer *:text-meron">
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 2</a>
            </li>
            <li>
              <a href="#">link 3</a>
            </li>
            <li>
              <a href="#">link 4</a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 lg:w-1/4">
          <label className="font-semibold capitalize">our company</label>
          <ul className="flex flex-col gap-2 *:cursor-pointer">
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 2</a>
            </li>
            <li>
              <a href="#">link 3</a>
            </li>
            <li>
              <a href="#">link 4</a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 lg:w-1/4">
          <label className="font-semibold capitalize">our address</label>
          <ul className="flex flex-col gap-2 *:cursor-pointer">
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 2</a>
            </li>
            <li>
              <a href="#">link 3</a>
            </li>
            <li>
              <a href="#">link 4</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---------------------------------Copyright reservation content-------------------------------- */}
      <div className="flex flex-col bg-gray-200 mt-6 mb-2 lg:mt-12 lg:mb-0">
        <p className="pt-7 text-center text-gray">
          Copyright &#169; 2024 - All right reserved by
          <span className="text-yellow-300 font-medium capitalize">
            safeer ullah khan (xKhanDev),
            <a
              href="https://www.linkedin.com/in/safeer-khan-x/"
              className="cursor-pointer"
            >
              Linkden
            </a>
            <a href="https://github.com/xKhanDev" className="cursor-pointer">
              Github
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
