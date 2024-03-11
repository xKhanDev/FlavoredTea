import React from "react";

const ViewMenu = () => {
  return (
    <section className="w-full mt-6 flex">
      <div className="w-full flex flex-col px-4">
        <div className="border-white border-b-2 flex w-full justify-between items-center">
          <div className="flex flex-col">
            <h2 className="uppercase text-white font-medium">lets that</h2>
            <span className="capitalize text-2xl font-semibold text-meron">
              want to reserve a table?
            </span>
          </div>
          <button className="w-28 h-10 text-center bg-meron text-white rounded-3xl text-xs hover:text-black hover:bg-white hover:shadow-md hover:shadow-black capitalize">
            view menu
          </button>
        </div>
        <p className="text-meron text-sm mt-2 text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum,
          necessitatibus harum optio corporis dignissimos commodi similique
          temporibus provident saepe atque architecto suscipit omnis officia
          corrupti, alias at blanditiis ut.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit, laborum, necessitatibus harum optio
          corporis dignissimos commodi similique temporibus provident saepe
          atque architecto suscipit omnis officia corrupti, alias at blanditiis
          ut.
        </p>
      </div>
    </section>
  );
};

export default ViewMenu;
