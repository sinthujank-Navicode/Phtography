import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="flex h-screen w-full justify-center items-center p-6">
        <div className="grid h-full w-full grid-cols-10 grid-rows-4 gap-4 ">
          <div className="bg-white text-black text-2xl font-bold col-span-3 row-span-3 rounded-3xl flex justify-center items-center relative">
            <img
              src="/images/thumb1.jpg"
              alt="Main Image"
              className="w-full h-full object-cover rounded-3xl opacity-100"
            />

            <div className="absolute bottom-0 right-0 bg-white text-black p-4 rounded-br-3xl">
              Your Text Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
