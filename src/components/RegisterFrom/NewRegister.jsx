import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

const NewRegister = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <UserIcon
            className="h-6 w-6 
         "
          />{" "}
          Register
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2" htmlFor="username">
            User Email
          </label>
          <input
            type="email"
            id="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email"
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="mt-3 flex ">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <div>
            <a className="text-indigo-800 font-semibold" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-5">
            <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
