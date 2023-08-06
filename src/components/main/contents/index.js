import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Block from "components/block";

const Contents = ({ title, bgColor = "bg-white", children }) => {
  return (
    <div
      className={`w-full flex flex-col justify-center ${bgColor} pt-20 items-center`}
    >
      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <div className="w-full flex items-center flex-col">
          <div className="flex justify-center items-center flex-row">
            <div className="h-full pt-3 pr-3">
              <LinkIcon
                className="h-10 w-10 stroke-2  text-neutral-600 cursor-pointer hover:text-purple-500"
                aria-hidden="true"
              />
            </div>
            <div className="text-5xl font-black text-center ">
              <div>{title}</div>
              <hr className="w-auto h-[0.05rem] mx-auto my-3 bg-black border-0" />
            </div>
          </div>
          {children}
        </div>
      </div>
      <Block title={title} />
    </div>
  );
};

export default Contents;
