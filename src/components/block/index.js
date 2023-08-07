import React from "react";

//Todo : 리팩토링
const pageChecker = {
  main: "aboutme",
  "About Me": "skills",
  Skills: "archiving",
  Archiving: "projects",
  Projects: "career",
};

//react-scroll 타켓
const Block = ({ title }) => {
  const viewData = pageChecker[title];
  return <div className="h-[4.75rem] w-full" id={viewData}></div>;
};

export default Block;
