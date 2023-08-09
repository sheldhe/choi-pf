import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-scroll";

const MHeader = ({ mainCheck, onHomeGo, onInquGo }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleGo = () => {
    onInquGo();
    toggleDrawer();
  };
  const handleHomnGo = () => {
    onHomeGo();
    toggleDrawer();
  };
  return (
    <div className="md:hidden block">
      <Bars3Icon
        className="h-6 w-6 text-orange-600 cursor-pointer hover:text-orange-500"
        onClick={toggleDrawer}
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size="100%"
        className="w-full bg-teal-400"
      >
        <div className="p-4 text-teal-400 flex flex-col ">
          <div className="flex flex-row justify-between pb-4 border-b border-black">
            <div className="flex items-center flex-shrink-0 text-white mr-6 ">
              <span
                className={`font-semibold text-xl md:text-3xl tracking-tight  text-black font-gy`}
              >
                초이 포폴
              </span>
            </div>
            <div onClick={toggleDrawer}>
              <XMarkIcon className="h-6 w-6 text-black hover:text-orange-600 cursor-pointer" />
            </div>
          </div>
          <div className="mt-6 flex flex-col border-b pb-6">
            {!mainCheck ? (
              <>
                <Link
                  to="aboutme"
                  onClick={toggleDrawer}
                  spy={true}
                  smooth={true}
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                >
                  About Me
                </Link>

                <Link
                  to="skills"
                  onClick={toggleDrawer}
                  spy={true}
                  smooth={true}
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                >
                  Skills
                </Link>
                <Link
                  to="archiving"
                  onClick={toggleDrawer}
                  spy={true}
                  smooth={true}
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                >
                  Archiving
                </Link>
                <Link
                  to="projects"
                  onClick={toggleDrawer}
                  spy={true}
                  smooth={true}
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                >
                  Projects
                </Link>
                <Link
                  to="career"
                  onClick={toggleDrawer}
                  spy={true}
                  smooth={true}
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                >
                  Career
                </Link>
                <div
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                  onClick={() => handleGo()}
                >
                  Inquiry
                </div>
              </>
            ) : (
              <>
                <div
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                  onClick={() => handleHomnGo()}
                >
                  Main
                </div>
                <div
                  className={`pl-2 pr-2 cursor-pointer text-black text-lg font-medium mb-2`}
                  onClick={() => handleGo()}
                >
                  Inquiry
                </div>
              </>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MHeader;
