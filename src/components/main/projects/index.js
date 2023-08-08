import React from "react";
import { PlayIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  const handleMore = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div className="pt-12 w-full">
      <div className="bg-white w-full rounded-md md:p-8  pr-4 pl-4 pt-8 pb-8 flex justify-center flex-col mb-10">
        <div className="flex justify-center font-gy font-bold text-3xl mb-4">
          포트폴리오 웹사이트
        </div>
        <div className="flex justify-center text-neutral-500 font-gy text-lg mb-4">
          개인 프로젝트
        </div>
        <div className="flex justify-center md:flex-row flex-col mt-8 mb-8 w-full">
          <div className="flex justify-center flex-row md:w-6/12 w-full pl-8 pr-8">
            <div className="h-64 bg-red-400 bg-pro_web  w-full bg-cover bg-no-repeat mb-8"></div>
          </div>
          <div className="flex justify-center flex-col md:w-6/12 w-full pl-8 pr-8">
            <div className="font-gy">
              <div className="mb-4">
                <span className="font-semibold">
                  포트폴리오 용도로 제작한 웹사이트
                </span>
                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
              </div>
              <div className="mb-8">
                이미 순수 React로 개발을 완료한 프로젝트였지만 빠르게
                포트폴리오를 만들어야하는 상황에 가장빠르게 개발이 가능한
                환경으로 FireBase와 Tailwind를 활용하여 7일 이내 개발한 사이트,
                반응형을 고려하였고, 문의 하기 기능을 통해 Firebase DB 활용
              </div>
            </div>
            <div className=" pb-4 border-b border-grey-500 ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                <div
                  className="flex items-center"
                  onClick={() =>
                    handleMore("https://github.com/sheldhe/choi-pf")
                  }
                >
                  <span className="font-gy">자세히 보기 &nbsp;</span>
                  <PlayIcon className="h-4 w-4 " />
                </div>
              </button>
            </div>
            <div className="flex flex-col pt-4 pb-4">
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    주요기능
                  </div>
                </div>
                <div className="flex-1">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리
                  링크, 프로젝트 경험, 업무 경력 소개
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    GitHub
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://github.com/sheldhe/choi-pf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://github.com/sheldhe/choi-pf
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Url
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://choipf-2023.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://choipf-2023.web.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Front End
                  </div>
                </div>
                <div className="flex-1">React.js, Tailwind, React Query</div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Deployment
                  </div>
                </div>
                <div className="flex-1">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-md md:p-8  pr-4 pl-4 pt-8 pb-8 flex justify-center flex-col mb-10">
        <div className="flex justify-center font-gy font-bold text-3xl mb-4">
          열나요 어드민 리뉴얼 관리자
        </div>
        <div className="flex justify-center text-neutral-500 font-gy text-lg mb-4">
          회사 프로젝트
        </div>
        <div className="flex justify-center md:flex-row flex-col mt-8 mb-8 w-full">
          <div className="flex justify-center flex-row md:w-6/12 w-full pl-8 pr-8">
            <div className="h-64 bg-red-400 bg-pro_web  w-full bg-cover bg-no-repeat mb-8"></div>
          </div>
          <div className="flex justify-center flex-col md:w-6/12 w-full pl-8 pr-8">
            <div className="font-gy">
              <div className="mb-4">
                <span className="font-semibold">
                  포트폴리오 용도로 제작한 웹사이트
                </span>
                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
              </div>
              <div className="mb-8">
                이미 순수 React로 개발을 완료한 프로젝트였지만 빠르게
                포트폴리오를 만들어야하는 상황에 가장빠르게 개발이 가능한
                환경으로 FireBase와 Tailwind를 활용하여 7일 이내 개발한 사이트,
                반응형을 고려하였고, 문의 하기 기능을 통해 Firebase DB 활용
              </div>
            </div>
            <div className=" pb-4 border-b border-grey-500 ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                <div
                  className="flex items-center"
                  onClick={() =>
                    handleMore("https://github.com/sheldhe/choi-pf")
                  }
                >
                  <span className="font-gy">자세히 보기 &nbsp;</span>
                  <PlayIcon className="h-4 w-4 " />
                </div>
              </button>
            </div>
            <div className="flex flex-col pt-4 pb-4">
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    주요기능
                  </div>
                </div>
                <div className="flex-1">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리
                  링크, 프로젝트 경험, 업무 경력 소개
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    GitHub
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://github.com/sheldhe/choi-pf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://github.com/sheldhe/choi-pf
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Url
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://choipf-2023.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://choipf-2023.web.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Front End
                  </div>
                </div>
                <div className="flex-1">React.js, Tailwind, React Query</div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Deployment
                  </div>
                </div>
                <div className="flex-1">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-md md:p-8  pr-4 pl-4 pt-8 pb-8 flex justify-center flex-col mb-10">
        <div className="flex justify-center font-gy font-bold text-3xl mb-4">
          열나요 광고 어드민 관리자
        </div>
        <div className="flex justify-center text-neutral-500 font-gy text-lg mb-4">
          회사 프로젝트
        </div>
        <div className="flex justify-center md:flex-row flex-col mt-8 mb-8 w-full">
          <div className="flex justify-center flex-row md:w-6/12 w-full pl-8 pr-8">
            <div className="h-64 bg-red-400 bg-pro_web  w-full bg-cover bg-no-repeat mb-8"></div>
          </div>
          <div className="flex justify-center flex-col md:w-6/12 w-full pl-8 pr-8">
            <div className="font-gy">
              <div className="mb-4">
                <span className="font-semibold">
                  포트폴리오 용도로 제작한 웹사이트
                </span>
                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
              </div>
              <div className="mb-8">
                이미 순수 React로 개발을 완료한 프로젝트였지만 빠르게
                포트폴리오를 만들어야하는 상황에 가장빠르게 개발이 가능한
                환경으로 FireBase와 Tailwind를 활용하여 7일 이내 개발한 사이트,
                반응형을 고려하였고, 문의 하기 기능을 통해 Firebase DB 활용
              </div>
            </div>
            <div className=" pb-4 border-b border-grey-500 ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                <div
                  className="flex items-center"
                  onClick={() =>
                    handleMore("https://github.com/sheldhe/choi-pf")
                  }
                >
                  <span className="font-gy">자세히 보기 &nbsp;</span>
                  <PlayIcon className="h-4 w-4 " />
                </div>
              </button>
            </div>
            <div className="flex flex-col pt-4 pb-4">
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    주요기능
                  </div>
                </div>
                <div className="flex-1">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리
                  링크, 프로젝트 경험, 업무 경력 소개
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    GitHub
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://github.com/sheldhe/choi-pf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://github.com/sheldhe/choi-pf
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Url
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://choipf-2023.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://choipf-2023.web.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Front End
                  </div>
                </div>
                <div className="flex-1">React.js, Tailwind, React Query</div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Deployment
                  </div>
                </div>
                <div className="flex-1">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-md md:p-8  pr-4 pl-4 pt-8 pb-8 flex justify-center flex-col mb-10">
        <div className="flex justify-center font-gy font-bold text-3xl mb-4">
          SHINE 어드민 관리자
        </div>
        <div className="flex justify-center text-neutral-500 font-gy text-lg mb-4">
          회사 프로젝트
        </div>
        <div className="flex justify-center md:flex-row flex-col mt-8 mb-8 w-full">
          <div className="flex justify-center flex-row md:w-6/12 w-full pl-8 pr-8">
            <div className="h-64 bg-red-400 bg-pro_web  w-full bg-cover bg-no-repeat mb-8"></div>
          </div>
          <div className="flex justify-center flex-col md:w-6/12 w-full pl-8 pr-8">
            <div className="font-gy">
              <div className="mb-4">
                <span className="font-semibold">
                  포트폴리오 용도로 제작한 웹사이트
                </span>
                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
              </div>
              <div className="mb-8">
                이미 순수 React로 개발을 완료한 프로젝트였지만 빠르게
                포트폴리오를 만들어야하는 상황에 가장빠르게 개발이 가능한
                환경으로 FireBase와 Tailwind를 활용하여 7일 이내 개발한 사이트,
                반응형을 고려하였고, 문의 하기 기능을 통해 Firebase DB 활용
              </div>
            </div>
            <div className=" pb-4 border-b border-grey-500 ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                <div
                  className="flex items-center"
                  onClick={() =>
                    handleMore("https://github.com/sheldhe/choi-pf")
                  }
                >
                  <span className="font-gy">자세히 보기 &nbsp;</span>
                  <PlayIcon className="h-4 w-4 " />
                </div>
              </button>
            </div>
            <div className="flex flex-col pt-4 pb-4">
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    주요기능
                  </div>
                </div>
                <div className="flex-1">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리
                  링크, 프로젝트 경험, 업무 경력 소개
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    GitHub
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://github.com/sheldhe/choi-pf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://github.com/sheldhe/choi-pf
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Url
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href="https://choipf-2023.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    https://choipf-2023.web.app/
                  </a>
                </div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Front End
                  </div>
                </div>
                <div className="flex-1">React.js, Tailwind, React Query</div>
              </div>
              <div className="flex flex-row pb-4">
                <div className="w-32">
                  <div className="flex items-center font-semibold">
                    <CheckBadgeIcon className="h-6 w-6 pr-1" />
                    Deployment
                  </div>
                </div>
                <div className="flex-1">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
