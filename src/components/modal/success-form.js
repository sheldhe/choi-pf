import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SuccessForm = ({ closeModal }) => {
  return (
    <div className="relative bg-white">
      <div
        onClick={closeModal}
        className="absolute right-4 top-4 border rounded-sm p-px cursor-pointer"
      >
        <XMarkIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
      </div>
      <div className="p-4 mb-4">
        <div className="text-center text-lg font-medium mt-8 font-gy ">
          작성완료
        </div>
        <div className="text-center text-base pt-2 font-gy ">
          <span className=" text-emerald-600 font-gy ">작성</span>{" "}
          완료되었습니다.
        </div>
      </div>
      <div className="bg-stone-100 p-5">
        <button
          className="bg-white w-full  text-sm text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow font-gy"
          onClick={closeModal}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default SuccessForm;
