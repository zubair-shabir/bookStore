import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
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
              Login
            </button>
            <p>
              Not Registered?
              <Link to="/signup">
                <span className="underline text-blue-500 cursor-pointer">
                  Signup
                </span>
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
