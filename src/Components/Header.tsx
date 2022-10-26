import React from "react";
import Navbar from "./Navbar";
import IntroImg from "../assets/images/illustration-intro.png";
// import desktopPattern from '../assets/images/bg-curvy-desktop.svg'
// import mobilePattern from '../assets/images/bg-curvy-mobile.svg'

function Header() {
  return (
    <main className="relative bg-[#1C2431] bg-intro-mobile md:bg-intro-desktop bg-bottom bg-contain bg-no-repeat text-white overflow-hidden">
      <Navbar />
      <div className="z-40 flex flex-col items-center text-center px-10">
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
      {/* <div className="-z-10 absolute w-full h-full bottom-[-30rem] scale-125">
        <img src={desktopPattern} alt="" />
      </div> */}
      {/* bg-intro-mobile md:bg-intro-desktop bg-bottom bg-contain bg-no-repeat */}
    </main>
  );
}

export default Header;
