import React from "react";
import Navbar from "./Navbar";
import IntroImg from "../assets/images/illustration-intro.png";

function Header() {
  return (
    <main className="bg-[#1C2431] bg-intro-mobile md:bg-intro-desktop bg-bottom bg-contain bg-no-repeat text-white">
      <Navbar />
      <div className="flex flex-col items-center text-center px-10">
        <img src={IntroImg} alt="" />
        <h1 className="font-bold text-3xl my-5 lg:w-[33rem]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="pb-5 lg:w-[33rem]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </main>
  );
}

export default Header;
