import React, { useContext } from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { DataContext } from "../App";

const Menu = () => {
  const jsonData = useContext(DataContext);

  return (
    <div className="w-full h-screen flex flex-col justify-center gap-12 md:flex-row lg:flex-row lg:flex-wrap lg:gap-20 mb-6">
      {jsonData.products.map((product) => {
        return (
          <div className="" key={product.id}>
            <div>
              <img src={product.image} className="size-36 z-10 my-0 mx-auto" />
            </div>

            <div className="size-52 rounded-3xl bg-gray-300 p-2 flex flex-col justify-center gap-1 -mt-12 my-0 mx-auto">
              <h2 className="text-meron font-semibold text-lg mt-20">
                {product.name}
              </h2>
              <span className="text-balance text-xs">
                {product.description}
              </span>
              <div className="flex gap-8 mx-auto my-2 *:bg-white *:size-8 *:p-1 *:rounded-xl *:cursor-pointer">
                <MdOutlineShoppingCart />
                <MdOutlineFavoriteBorder />
              </div>
              <button className="bg-meron rounded-2xl text-white w-20 p-2 my-0 mx-auto hover:text-black hover:bg-white hover:shadow-md hover:shadow-black">
                {product.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
