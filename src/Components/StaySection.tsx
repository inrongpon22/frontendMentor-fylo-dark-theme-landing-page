import React from "react";
import stayImg from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";

function StaySection() {
  return (
    <main className="bg-[#181F2A] text-white p-10 lg:flex lg:items-center ">
      <img src={stayImg} alt="" />
      <div className="md:p-10">
        <h3 className="text-lg md:text-5xl font-semibold my-3">
            Stay productive, wherever you are
        </h3>
        <p className="my-3">
            Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file storage needs.
        </p>
        <p className="my-3">
            Securely share files and folders with friends, family and colleagues for
            live collaboration. No email attachments required.
        </p>
        <div className="flex items-center text-[#65E2D9] border-b-2 py-2 w-44 cursor-pointer">
            <a href="#">See how Fylo works</a>
            <img src={arrow} alt="" className="w-6 mx-1" />
        </div>
      </div>
    </main>
  );
}

export default StaySection;
