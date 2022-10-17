import React from "react";
import anywhere from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyfile from "../assets/images/icon-any-file.svg";

function Features() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 bg-[#181F2A] text-white text-center py-12 px-16">
      <div className="flex flex-col items-center p-10">
        <img src={anywhere} alt="" className="p-3" />
        <h3 className="font-bold text-xl">Access your files, anywhere</h3>
        <p className="mt-3">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="flex flex-col items-center p-10">
        <img src={security} alt="" className="p-3" />
        <h3 className="font-bold text-xl">Security you can trust</h3>
        <p className="mt-3">
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="flex flex-col items-center p-10">
        <img src={collaboration} alt="" className="p-3" />
        <h3 className="font-bold text-xl">Real-time collaboration</h3>
        <p className="mt-3">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="flex flex-col items-center p-10">
        <img src={anyfile} alt="" className="p-3" />
        <h3 className="font-bold text-xl">Store any type of file</h3>
        <p className="mt-3">
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </main>
  );
}

export default Features;
