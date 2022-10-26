import React from "react";
import userData from "../Components/userData";
import quoteIcon from "../assets/images/bg-quotes.png";

function QuoteSection() {
  return (
    <main className="relative lg:flex px-5 pb-1 pt-32 lg:py-5 lg:px-32 text-white bg-[#181F2A]">
      <img className="absolute w-8 lg:w-10 left-11 lg:left-36 lg:top-4 lg:z-0" src={quoteIcon} alt="" />
      {userData.map((user, index) => (
        <div key={index} className="lg:z-10 p-8 bg-[#202A3C] m-5 text-sm">
          <p key={user.quote} className="">
            {user.quote}
          </p>
          <div className="flex items-center pt-5">
            <img
              className="w-9 h-9 rounded-full"
              key={user.profile}
              src={user.profile}
              alt=""
            />
            <div className="ml-4">
              <h4 key={user.name} className="font-bold">
                {user.name}
              </h4>
              <p key={user.position} className="text-xs">
                {user.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default QuoteSection;
