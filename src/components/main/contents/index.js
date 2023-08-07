import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Block from "components/block";
import { Link } from "react-scroll";

//Todo:리팩토링 필요 
const pageChecker = {
  // main: "aboutme",
  "About Me": "aboutme",
  Skills: "skills",
  Archiving: "archiving",
  Projects: "projects",
  Career: "career",
};

const Contents = ({ title, bgColor = "bg-white", children }) => {
  const toUrl =pageChecker[title];

  return (
    <div
      className={`w-full flex flex-col justify-center ${bgColor} pt-20 items-center md:pr-0 md:pl-0 pl-2 pr-2` }
    >
      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <div className="w-full flex items-center flex-col">
          <div className="flex justify-center items-start flex-row">
            <div className="h-full pt-3 pr-3 md:block hidden">
              <Link to={toUrl} spy={true} smooth={true}>
              <LinkIcon
                className="h-10 w-10 stroke-2  text-neutral-600 cursor-pointer hover:text-purple-500"
                aria-hidden="true"
              />
            </Link>
            </div>
            <div className=" md:text-5xl text-3xl font-black text-center ">
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
