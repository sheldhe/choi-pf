import React from "react";
import Contents from "components/main/contents";

const Inquiry = () => {
  return (
    <>
      <div className="bg-inquiry01 h-screen w-screen bg-cover max-h-[20rem] flex justify-center pt-20"></div>
      <Contents title={"Inquiry"}>
        <div className="h-60">
          <div>필요하신 내용을 문의주세요.</div>
        </div>
      </Contents>
    </>
  );
};

export default Inquiry;
