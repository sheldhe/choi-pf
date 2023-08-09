import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MHeader from "components/header/mheader";
import WHeader from "components/header/wheader";

const Header = ({ positionMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor = positionMode ? "bg-transparent" : "bg-white";
  const texColor = positionMode ? "text-zinc-200" : "text-black";
  const texHoverColor = positionMode
    ? "hover:text-zinc-50 hover:underline hover:decoration-purple-500"
    : "hover:text-black hover:underline hover:decoration-purple-500";
  const borerColor = positionMode ? "" : "1px solid grey";
  const shawdo = positionMode ? "" : "shadow shadow-neutral-300";
  const handlePageGo = () => {
    navigate("/Inquiry");
  };
  const handleGoHome = () => {
    navigate("/");
  };
  const mainCheck = location.pathname === "/" ? false : true;
  return (
    <nav
      className={`fixed w-full flex items-center justify-center flex-wrap md:p-5 p-4 ${borerColor} ${bgColor} ${shawdo}`}
    >
      <div className="w-full max-w-screen-lg flex items-center justify-between ">
        <div
          className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer "
          onClick={handleGoHome}
        >
          <span
            className={`font-semibold text-xl md:text-3xl tracking-tight ${texColor} font-gy hover:text-orange-600`}
          >
            초이 포폴
          </span>
        </div>
        <div className="flex items-center flex-shrink-0 text-white ">
          <MHeader
            mainCheck={mainCheck}
            onHomeGo={handleGoHome}
            onInquGo={handlePageGo}
          />
          <WHeader
            mainCheck={mainCheck}
            onHomeGo={handleGoHome}
            onInquGo={handlePageGo}
            texColor={texColor}
            texHoverColor={texHoverColor}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
