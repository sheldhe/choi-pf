import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

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
      className={`fixed w-full flex items-center justify-center flex-wrap p-5 ${borerColor} ${bgColor} ${shawdo}`}
    >
      <div className="w-full max-w-screen-lg flex items-center justify-between ">
        <div
          className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer "
          onClick={handleGoHome}
        >
          <span
            className={`font-semibold text-3xl tracking-tight ${texColor} font-gy hover:text-orange-600`}
          >
            초이 포폴
          </span>
        </div>
        <div className="flex items-center flex-shrink-0 text-white ">
          {mainCheck ? (
            <div
              className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              onClick={handleGoHome}
            >
              Main
            </div>
          ) : (
            <>
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              >
                About Me
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              >
                Skills
              </Link>
              <Link
                to="archiving"
                spy={true}
                smooth={true}
                className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              >
                Archiving
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              >
                Projects
              </Link>
              <Link
                to="career"
                spy={true}
                smooth={true}
                className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
              >
                Career
              </Link>
            </>
          )}

          <div
            className={`pl-2 pr-2 font-semibold text-orange-600 cursor-pointer hover:text-orange-500`}
            onClick={handlePageGo}
          >
            Inquiry
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
