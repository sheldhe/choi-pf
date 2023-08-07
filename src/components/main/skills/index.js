import React from "react";

const Skills = () => {
  return (
    <>
      <div className="pt-12 flex justify-center items-start md:flex-row flex-col">
        <div className="md:w-4/12 w-full flex justify-center pr-6 md:pl-0 pl-6 mb-8">
          <div className="bg-white w-full rounded-xl p-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Front End
            </div>
            <div className="mt-8">
              <img src="/img/front_01.png" alt="frontend_01" />
              <img src="/img/front_02.png" alt="frontend_02" />
              <img src="/img/front_04.png" alt="frontend_04" />
            </div>
          </div>
        </div>
        <div className="md:w-4/12 w-full flex flex-col items-center pr-6 pl-6">
          <div className="bg-white w-full rounded-xl p-8">
            <div className="text-2xl font-semibold pb-2 border-b border-grey-500">
              Back End
            </div>
            <div className="mt-8">
              <img src="/img/backend_01.png" alt="backend_01" />
              <div className="text-center text-4xl pt-2 pb-2 text-neutral-500">
                PHP
              </div>
              <div className="text-center text-4xl pt-2 pb-2 text-neutral-500">
                C#
              </div>
              <div className="text-center text-4xl pt-2 pb-2 text-neutral-500">
                JAVA
              </div>
              {/* <img src="/img/backend_02.png" alt="backend_02" />
              <img src="/img/backend_03.png" alt="backend_03" />
              <img src="/img/backend_04.png" alt="backend_04" /> */}
              {/* <img src="/img/backend.png" alt="backend" /> */}
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
              <img src="/img/deployment_01.png" alt="deployment_01" />
              <img src="/img/backend_01.png" alt="deployment_02" />
              {/* <img src="/img/deployment.png" alt="deployment" /> */}
            </div>
          </div>
        </div>
        <div className="md:w-4/12 w-full flex justify-center flex-col pl-6">
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
