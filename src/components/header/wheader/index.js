import React from "react";
import { Link } from "react-scroll";

const WHeader = ({
  mainCheck,
  onHomeGo,
  onInquGo,
  texColor,
  texHoverColor,
}) => {
  return (
    <div className="md:flex hidden">
      {mainCheck ? (
        <div
          className={`pl-2 pr-2 ${texColor} cursor-pointer ${texHoverColor}`}
          onClick={onHomeGo}
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
        onClick={onInquGo}
      >
        Inquiry
      </div>
    </div>
  );
};

export default WHeader;
