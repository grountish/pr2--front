/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full flex text-mint-900">
        <div className="w-6/12 py-12 bg-cream  flex flex-row justify-around px-6">
          <div className="flex flex-col space-y-20">
            <h1 className="text-2xl">title colum</h1>
            <div className="space-y-3">
              <h2>somelink</h2>
              <h2>somelink</h2>
              <h2>somelink</h2>
            </div>
          </div>
          <div className="flex flex-col space-y-20">
            <h1 className="text-2xl">title colum</h1>
            <div className="space-y-3">
              <h2>somelink</h2>
              <h2>somelink</h2>
              <h2>somelink</h2>
            </div>
          </div>
          <div className="flex flex-col space-y-20">
            <h1 className="text-2xl">title colum</h1>
            <div className="space-y-3">
              <h2>somelink</h2>
              <h2>somelink</h2>
              <h2>somelink</h2>
            </div>
          </div>
        </div>
        <div className="w-1/4  bg-gradient-to-b from-cream to-mint-700 py-12 px-12 flex flex-col space-y-20">
          <h1 className="text-2xl">title colum</h1>
          <div className="space-y-3 text-cream">
            <h2>somelink</h2>
            <h2>somelink</h2>
            <h2>somelink</h2>
          </div>
          <div className="space-y-3 text-cream">
            <h1>
              © 2022
              <br />
              Mento Inc.
              <br />
              All rights reserved.
            </h1>
          </div>
        </div>
        <div className="w-1/4 grid">
          <div className="py-12 px-12 flex flex-col space-y-20 bg-gradient-to-b to-cream from-mint-700">
            <h1 className="text-2xl text-cream">title colum</h1>
            <div className="space-y-3">
              <h2>somelink</h2>
              <h2>somelink</h2>
              <h2>somelink</h2>
            </div>
          </div>
          <div className="w-full py-4 px-12 bg-white">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="w-full bg-mint-800  text-mint-900 text-4xl uppercase py-4">
        <marquee behavior="" direction="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae
          odit nihil neque non pariatur omnis? Quisquam reiciendis at impedit,
          maiores odit excepturi suscipit quae cum ut sequi consequuntur
          perspiciatis!
        </marquee>
      </div>
    </>
  );
};

export default Footer;
