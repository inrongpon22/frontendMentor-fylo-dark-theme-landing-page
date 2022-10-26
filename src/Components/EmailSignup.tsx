import React, { useState } from "react";
import { render } from "react-dom";



function EmailSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(true);
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (e:any) => {
    setEmail(e.target.value)
    if(regEx.test(email)=== false){
      setError(false)
    }else{
      setError(true)
    }
  }


  return (
    <main className="text-white bg-[#181F2A] py-1 lg:flex lg:justify-center">
      <div className="flex flex-col items-center lg:w-3/5 bg-[#1C2431] p-10 m-5 rounded-lg shadow-lg translate-y-[12rem]">
        <h2 className="font-semibold text-xl lg:text-3xl">
          Get early access today
        </h2>
        <p className="text-sm text-center py-5 lg:text-lg">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="w-full">
          <div className="w-full lg:flex lg:items-center lg:justify-between">
            <input
              type="text"
              placeholder="email@example.com"
              className="my-5 w-full text-black"
            />
            <button className="w-full lg:w-2/5 lg:ml-3"
            onClick={validateEmail}
            >
              Get Started For Free
            </button>
          </div>
            <p id="validateEmail" className={`text-[#FF4242] font-bold pl-10 ${error ? `invisible` : `visible`}`}>
              Please enter a valid email address.
            </p>
        </div>
      </div>
    </main>
  );
}

export default EmailSignup;
