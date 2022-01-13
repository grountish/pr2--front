/* eslint-disable react/react-in-jsx-scope */

import React from "react";
import check from "../assets/images/check.svg";
import grupthruve from "../assets/images/grupthruve.png";

const Thrive = () => {
  return (
    <div className="min-h-screen flex bg-cream">
      <div className="max-w-screen-xl w-full   m-auto">
        <div className="mx-20 my-16">
          <h1 className=" text-4xl  py-6 text-left">
            Everything you need to THRIVE <br /> in your career (and your life) for
            just $5/day
          </h1>
          <div className="flex justify-around items-strech    mx-auto ">
            <div className="w-5/12 pl-6  bg-primary-500 rounded-l-3xl">
              <img src={grupthruve} alt="card" className=" object-cover" />
            </div>{" "}
            <div className="w-7/12 px-20 py-12 space-y-4 bg-white text-black rounded-r-3xl rounded">
              <ul className="space-y-6 flex flex-col text-2xl thriveList" >
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
                <li> Get unstuck and find clarity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thrive;
