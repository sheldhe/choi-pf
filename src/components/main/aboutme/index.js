import React from "react";
import {
  CalendarDaysIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";

const AboutMe = () => {
  return (
    <>
      <div className="pt-12 flex flex-row flex-wrap">
        <div className="w-4/12 flex flex-row mt-8 ">
          <div className="flex w-12">
            <div className="flex justify-center items-center bg-orange-50 h-10 w-10 rounded-full">
              <UserIcon className="h-6 w-6 stroke-1" aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">이름</span>
            </div>
            <div className="font-medium text-lg font-gy">
              최대한(Choi Dae Han)
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-row mt-8">
          <div className="flex w-12">
            <div className="flex justify-center items-center  bg-orange-50 h-10 w-10 rounded-full">
              <CalendarDaysIcon
                className="h-6 w-6 stroke-1"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">생년 월일</span>
            </div>
            <div className="font-medium text-lg font-gy">1993. 02. 19</div>
          </div>
        </div>{" "}
        <div className="w-4/12 flex flex-row mt-8">
          <div className="flex w-12">
            <div className="flex justify-center items-center  bg-orange-50 h-10 w-10 rounded-full">
              <MapPinIcon className="h-6 w-6 stroke-1" aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">사는 곳</span>
            </div>
            <div className="font-medium text-lg font-gy">
              서울시 성북구 길음동
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-row mt-8">
          <div className="flex w-12">
            <div className="flex justify-center items-center  bg-orange-50 h-10 w-10 rounded-full">
              <DevicePhoneMobileIcon
                className="h-6 w-6 stroke-1"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">전화번호</span>
            </div>
            <div className="font-medium text-lg font-gy">010-7234-7454</div>
          </div>
        </div>
        <div className="w-4/12 flex flex-row mt-8">
          <div className="flex w-12">
            <div className="flex justify-center items-center  bg-orange-50 h-10 w-10 rounded-full">
              <EnvelopeIcon className="h-6 w-6 stroke-1" aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">이메일 주소</span>
            </div>
            <div className="font-medium text-lg font-gy">
              sheldhe93@gmail.com
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-row mt-8">
          <div className="flex w-12">
            <div className="flex justify-center items-center bg-orange-50 h-10 w-10 rounded-full">
              <FireIcon className="h-6 w-6 stroke-1" aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col justify-center pl-2">
            <div>
              <span className="font-semibold text-lg font-gy">취미</span>
            </div>
            <div className="font-medium text-lg font-gy">볼링 /일본어 </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full">
        <div className="bg-purple-300 pt-4 pb-4 text-center w-full">
          <span className="font-gy font-semibold ">
            * 외주 개발 또는 과외/레슨 문의는 위 연락처/이메일로 부탁드립니다.
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
