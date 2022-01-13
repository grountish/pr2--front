import React from "react";
import figma from "../assets/images/figma.png";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";

const NextUp = () => {
  return (
    <div className="h-screen flex w-screen bg-white p-12">
      <div className="max-w-screen-xl w-screen m-auto">
        <div className="bg-cream flex flex-col w-full   rounded-3xl">
          <h1 className="text-4xl py-8 mx-auto">Next up...</h1>
          <div className="grid grid-cols-2 gap-6 w-3/4 mx-auto pb-6">
            {[0, 1, 2, 3].map((img, i) => {
              return (
                <div className="bg-cover relative bg-center bg-no-repeat"  >
                  <h1 className="mt-auto absolute bottom-12 left-16 w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                  <img src={i < 2 ? box1 : box2} className="" alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextUp;
