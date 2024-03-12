import React from "react";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full mt-10 flex flex-col p-4">
      <div className="w-full flex gap-2">
        <div className="hidden lg:flex flex-col lg:w-1/4 *:text-white">
          <span className="w-full flex items-center justify-center text-3xl font-bold gap-2 mt-5 lg:justify-start lg:mt-0 lg:w-1/2">
            Flavored <img src={logo} alt="logo" className="size-9" />
          </span>
          <p className="hidden lg:flex">Wake up for something Special</p>
        </div>
        <div className="w-1/3 lg:w-1/4">
          <label className="font-bold capitalize">our services</label>
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
          <label className="font-bold capitalize">our company</label>
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
          <label className="font-bold capitalize">our address</label>
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
      <div className="w-full text-center mt-6 mb-2 lg:mt-12 lg:mb-0">
        <span className="flex justify-center gap-2 text-xs">
          All Right reserved by safeer ullah khan <a href="#">Linkden</a>{" "}
          <a href="#">github</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
