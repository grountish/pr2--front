import React from "react";
import bg from "../assets/images/Group.jpg";
import Button from "./Button";
const HomeHow = () => {
  return (
    <div
      className="h-screen flex w-screen space-y-12 flex-col justify-center  items-stretch text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="max-w-screen-xl m-auto">
      <div className="grid gap-4  w-1/2 mx-auto">
        <h1 className="text-2xl">How it works</h1>
        <p>
          No over complicated questionnaires or forms. No waitlists, no
          applications.We’re here to help you progress since day 1, no time to
          waste.
        </p>
      </div>
      <div className="flex justify-around space-x-6 items-center w-10/12 py-24 mx-auto">
        <div className="text-left space-y-6 border px-5 py-6 rounded-tl-3xl rounded-br-3xl drop-shadow-lg bg-cream">
          <h1>blabla</h1> <p>Kick-start your growth with bi-weekly sessions. Set goals, make progress, access group coaching, events, and more.</p>
        </div>
        <div
          style={{ background: "rgba(255,255,255,0.3)" }}
          className="p-8 h-6 font-bold w-6 text-white flex justify-center items-center border border-white   rounded-full"
        >
          <h1>⟶</h1>
        </div>
        <div className="text-left space-y-6 border px-5 py-6 rounded-tl-3xl rounded-br-3xl drop-shadow-lg bg-cream">
          <h1>blabla</h1> <p>Kick-start your growth with bi-weekly sessions. Set goals, make progress, access group coaching, events, and more.</p>
        </div>
        <div
          style={{ background: "rgba(255,255,255,0.3)" }}
          className="p-8 h-6 font-bold w-6 text-white flex justify-center items-center border border-white   rounded-full"
        >
          <h1>⟶</h1>
        </div>
        <div className="text-left space-y-6 border px-5 py-6 rounded-tl-3xl rounded-br-3xl drop-shadow-lg bg-cream">
          <h1>blabla</h1> <p>Kick-start your growth with bi-weekly sessions. Set goals, make progress, access group coaching, events, and more.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
    </div>
  );
};

export default HomeHow;
