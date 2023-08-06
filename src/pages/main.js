import React from "react";
import Contents from "components/main/contents";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import AboutMe from "components/main/aboutme";
import Skills from "components/main/skills";
import Career from "components/main/career";
import Projects from "components/main/projects";
import Block from "components/block";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <>
      <div className="bg-main01 h-screen w-screen bg-cover max-h-[38rem] flex justify-center pt-20">
        <div className="flex w-full max-w-screen-lg text-white justify-end items-center flex-col">
          <div className="text-5xl font-nomal mb-4 font-yd">
            - 최대한{process.env.REACT_APP_API_URL} -
          </div>
          <div className="text-5xl font-nomal font-yd">
            프론트 개발자 포트폴리오
          </div>
          <hr className="w-14 h-1 mx-auto my-4 bg-orange-400 border-0 md:my-9 " />
          <div className="text-center text-xl text-zinc-100 mb-8 leading-8 font-gy">
            안녕하세요.
            <br />
            풀 스택 개발을 하고싶어서 항상 노력하는 웹 개발자입니다. <br />
            매우 꼼꼼한 성격, 그리고 항상 새로운 것을 시도 하는 습관이 저의
            장점입니다.
          </div>
          <button
            type="button"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <Link to="aboutme" spy={true} smooth={true}>
              <ArrowSmallDownIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Icon Down</span>
            </Link>
          </button>
          <Block title="main" />
          {/* <div className="h-[4.75rem] w-full" id="aboutme"></div> */}
        </div>
      </div>
      <Contents title={"About Me"}>
        <AboutMe />
        {/* <Block view="aboutme" /> */}
      </Contents>
      <Contents title={"Skills"} bgColor={"bg-amber-100"}>
        <Skills />
      </Contents>
      <Contents title={"Archiving"} bgColor={"bg-amber-50"}>
        {/* <Skills /> */}
      </Contents>
      <Contents title={"Projects"} bgColor={"bg-cyan-700"}>
        <Projects />
      </Contents>
      <Contents title={"Career"} bgColor={"bg-gray-50"}>
        <Career />
      </Contents>
    </>
  );
};

export default Main;
