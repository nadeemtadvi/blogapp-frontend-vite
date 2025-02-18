import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/Endpoint";

const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value.fullName || !value.email || !value.password) {
      toast.error("All fields are required.");
      return;
    }

    const formData = {
      fullName: value.fullName,
      email: value.email,
      password: value.password,
    };

    try {
      const res = await post("/auth/register", formData);
      const data = res.data;

      if (data.success) {
        console.log("Registration successful:", data.message);
        toast.success(data.message);
        navigate("/login");
      } else {
        console.error("Registration failed:", data.message);
        toast.error(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Registration failed.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-screen-2xl m-2 sm:mx-auto">
      <div className="h-[100vh]">
        <div className="flex justify-center items-center p-2 mt-6 md:mt-12">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[36%] border border-stone-200  text-[16px] font-medium rounded p-2 sm:p-4 bg-stone-100"
          >
            <h2 className="text-[16px] font-semibold  text-stone-800 mb-6">
              Create an account
            </h2>
            <div className="mb-6">
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                value={value.fullName}
                onChange={(e) =>
                  setValue({ ...value, fullName: e.target.value })
                }
                className="rounded w-full px-4 py-2 border border-stone-200 focus:outline-none  focus:border-[#472ffd]"
              />
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="example@company.com"
                  value={value.email}
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                  className="rounded w-full px-4 py-2 border border-stone-200 focus:outline-none  focus:border-[#472ffd]"
                />
              </div>
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                placeholder="Password***"
                value={value.password}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                className=" rounded w-full px-4 py-2 border border-stone-200 focus:outline-none  focus:border-[#472ffd]"
              />
            </div>

            <button
              type="submit"
              className="rounded w-full py-2 border border-[#472ffd] hover:bg-[#472ffd] hover:text-white text-[#472ffd] font-normal"
            >
              Sign up
            </button>
            <div className="mt-6 text-center">
              <p className="text-stone-800">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#472ffd] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
