import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
const Signup = () => {
  return (
    <>
      <div className="flex  h-screen items-center justify-center ">
        <div className="w-[600px]  ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg text-center">Signup!</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <label for="name">Name:</label>
              <br />
              <input
                type="text"
                name=""
                id="name"
                placeholder="Enter your Full Name..."
                className="w-full px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label for="email">Email:</label>
              <br />
              <input
                type="text"
                name=""
                id="email"
                placeholder="Enter your email..."
                className="w-full px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* Password */}

            <div className="mt-4 space-y-2">
              <label for="password">Password:</label>
              <br />
              <input
                type="text"
                name=""
                id="password"
                placeholder="Enter your password..."
                className="w-full px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have an account?
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </span>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
