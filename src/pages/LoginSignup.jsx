import React from "react";

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[150vh] bg-[#fce3fe] pt-25">
      <div className="w-[500px] h-[550px] bg-white m-auto p-6">
        <h1 className="flex items-center justify-center p-2 text-2xl font-semibold">
          Sign Up
        </h1>
        <hr className="h-0.5 border-none bg-gray-200" />
        <div className=" mt-7 mb-5">
          <h1>Name</h1>
          <input
            className="h-12 border w-[100%] pl-5 border-[#c9c9c9] outline-none text-[#5c5c5c] size-4"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
        <div className=" mt-7 mb-5">
          <h1>Email</h1>
          <input
            className="h-12 border w-[100%] pl-5 border-[#c9c9c9] outline-none text-[#5c5c5c] size-4"
            type="Emai"
            placeholder="Enter Your Email"
          />
        </div>
        <div className=" mt-7 mb-5">
          <h1>Password</h1>
          <input
            className="h-12 border w-[100%] pl-5 border-[#c9c9c9] outline-none text-[#5c5c5c] size-4"
            type="Password"
            placeholder="Enter Your password"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button className="w-[420px] h-[42px] text-white bg-[#ff4141] mt-7 border-none font-[24px] from-neutral-500 cursor-pointer">
          Continue
        </button>
        <p className="mt-5 ">
          Already have a account?
          <span className="text-[#ff4141] font-bold cursor-pointer">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
