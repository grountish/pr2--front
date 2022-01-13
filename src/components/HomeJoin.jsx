import React from "react";
import figma from "../assets/images/figma.png";
import gruptark from "../assets/images/gruptark.png";

const HomeJoin = () => {
  return (
    <div className="min-h-screen flex w-screen space-y-12 flex-col justify-center  items-stretch text-center mb-24">
        <div className="max-w-screen-xl m-auto">
      <div className="grid gap-4  w-1/2 mx-auto mt-12">
        <p>THE COMMUNITY</p>
        <h1 className="text-2xl">Join a vibrant community</h1>
        <p>Build relationships and tap into the collective expertise</p>
      </div>
      <div className="flex justify-around items-strech  py-10 w-10/12 mx-auto ">
        <div className="w-7/12 px-20 py-12 space-y-4 bg-gray-800 text-white rounded-l-3xl rounded">
          <p className="text-left pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            culpa a nesciunt, minus animi, nihil ducimus ipsa dolore, corrupti
            perferendis blanditiis modi saepe quis mollitia quod similique
            placeat ad officiis?
          </p>
          <p className="text-left pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            culpa a nesciunt, minus animi, nihil ducimus ipsa dolore, corrupti
            perferendis blanditiis modi saepe quis mollitia quod similique
            placeat ad officiis?
          </p>
          <p className="text-left pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          </p>
        </div>
        <div className="w-5/12 pl-6  bg-mint-500 rounded-r-3xl">
          <img src={gruptark} alt="card" className=" object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-12 mb-12">
        <h1 className="text-2xl">Never feel alone again :)</h1>
        <div className="flex w-full justify-around px-24 mb-12">
          {[0, 1, 2, 3, 4].map((img, i) => {
            return <img key={i} src={figma} alt="logo" />;
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeJoin;
