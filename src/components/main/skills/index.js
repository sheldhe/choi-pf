import React from "react";

const Skills = () => {
  return (
    <>
      <div className="pt-12 flex justify-center items-start">
        <div className="w-4/12 flex justify-center  pr-6">
          <div className="bg-white w-full rounded-xl p-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Front End
            </div>
            <div className="mt-8">
              <img src="/img/frontend.png" alt="frontend" />
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col items-center pr-6 pl-6">
          <div className="bg-white w-full rounded-xl p-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Back End
            </div>
            <div className="mt-8">
              <img src="/img/backend.png" alt="backend" />
            </div>
          </div>
          <div className="bg-white w-full rounded-xl p-8 mt-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Mobile App
            </div>
            <div className="mt-8">
              <img src="/img/mobile-app.png" alt="mobile-app" />
            </div>
          </div>
          <div className="bg-white w-full rounded-xl p-8 mt-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Deployment
            </div>
            <div className="mt-8">
              <img src="/img/deployment.png" alt="deployment" />
            </div>
          </div>
        </div>
        <div className="w-4/12 flex justify-center flex-col pl-6">
          <div className="bg-white w-full rounded-xl p-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Version Control
            </div>
            <div className="mt-8">
              <img src="/img/version-control.png" alt="version-control" />
            </div>
          </div>
          <div className="bg-white w-full rounded-xl p-8 mt-8 ">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Communication
            </div>
            <div className="mt-8">
              <img src="/img/communication.png" alt="communication" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
