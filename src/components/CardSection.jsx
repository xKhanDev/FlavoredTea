import React, { useContext } from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { DataContext } from "../App";

const CardSection = () => {
  const jsonData = useContext(DataContext);
  const filterData = jsonData.products.slice(0, 2);
  return (
    <div className="w-full flex flex-col p-2 -mt-8 lg:flex-row lg:-mt-20 lg:items-center">
      <div className="w-full flex justify-center gap-2">
        {filterData.map((product) => {
          return (
            <div className="" key={product.id}>
              <div>
                <img
                  src={product.image}
                  className="size-36 z-10 my-0 mx-auto mb-2"
                />
              </div>

              <div className="size-52 rounded-3xl bg-gray-300 p-2 flex flex-col justify-center gap-1 -mt-20">
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
        {/* -----------------card----------------------- */}
      </div>
      <div className="w-full mt-10 p-4">
        <span className="font-bold text-lg">
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
          <button className="w-28 text-center mt-6 bg-meron text-white rounded-2xl p-2 hover:text-black hover:bg-white hover:shadow-md hover:shadow-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
