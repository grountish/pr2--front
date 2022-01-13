import React from "react";
 import vec1 from "../assets/images/vec1.png";
import vec2 from "../assets/images/vec2.png";
import vec3 from "../assets/images/vec3.png";
import vec4 from "../assets/images/vec4.png";
import vec5 from "../assets/images/vec5.png";
import vec6 from "../assets/images/vec6.png";
import Button from "./Button";


const HomeNewsletter = () => {
  return (
    <div className="h-screen flex w-screen bg-white p-16">
        <div className="max-w-screen-xl w-screen m-auto">
      <div className="bg-cream flex w-full rounded-3xl">
        <div className="w-2/5 grid p-12 space-y-6">
          <h1 className="text-4xl">
            title <br />
            tialsdkasdk
            <br />
            asdlasdl
          </h1>
          <div className="space-y-6 w-full flex flex-col">
            <input
              type="text"
              name=""
              id=""
              className="border border-black rounded-full px-6 py-3"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-black rounded-full px-6 py-3"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-black rounded-full px-6 py-3"
            />
          </div>
          <div className="flex  justify-start my-24">
          <Button />

          </div>
        </div>

        <div className="w-3/5 relative p-6">
          <img
            src={vec2}
            alt="figure"
            className="w-48 absolute"
            style={{ left: "20%", top: "" }}
          />
          <img
            src={vec3}
            alt="figure"
            className="w-48 absolute"
            style={{ right: "10%", top: "" }}
          />
          <img
            src={vec4}
            alt="figure"
            className="w-32 absolute"
            style={{ left: "45%", top: "42%" }}
          />
          <img
            src={vec6}
            alt="figure"
            className="w-52 absolute"
            style={{ left: "0", top: "42%" }}
          />
          <img
            src={vec5}
            alt="figure"
            className="w-48 absolute"
            style={{ left: "36%", bottom: "2%" }}
          />
          <img
            src={vec1}
            alt="figure"
            className="w-24 absolute"
            style={{ right: "10%", bottom: "2%" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeNewsletter;
