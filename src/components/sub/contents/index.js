import React from "react";

const Contents = ({ title, subTitle, bgColor = "bg-white", children }) => {
  return (
    <div
      className={`w-full flex flex-col justify-center ${bgColor} pt-20 items-center md:pr-0 md:pl-0 pl-2 pr-2`}
    >
      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <div className="w-full flex items-center flex-col">
          <div className="flex justify-center items-start flex-row mb-12">
            <div className=" md:text-5xl text-3xl font-black text-center ">
              <div className=" md:text-5xl text-3xl font-black text-center mb-6 ">
                {title}
              </div>
              <div className=" md:text-lg text-base font-medium text-center text-neutral-400">
                {subTitle}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Contents;
