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
      const res = await post("/auth/register", formData); // Removed multipart handling for simplicity
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
        // Display server error message if available
        toast.error(error.response.data.message || "Registration failed.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="max-w-screen-md mx-auto pb-10">
        <div className="sm:ml-14 sm:mr-10 px-3 py-6 sm:p-6">
          <h2 className="text-2xl text-center sm:text-start font-semibold text-gray-800 mb-4">
            Create an account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                value={value.fullName} // Corrected value binding
                onChange={(e) =>
                  setValue({ ...value, fullName: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#001beb]"
              />
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="example@company.com"
                  value={value.email}
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#001beb]"
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
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#001beb]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#001beb] hover:bg-blue-700 text-white font-semibold"
            >
              Sign up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#001beb] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
