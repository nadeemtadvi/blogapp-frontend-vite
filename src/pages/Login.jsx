import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/Endpoint";
import toast from "react-hot-toast";
import { useAuth } from "../Contextapi/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await post("/auth/login", value);
      const data = res.data;
      const {
        token,
        user: { fullName, email },
      } = data;
      console.log(data);
      if (res.status === 200) {
        login(token, fullName, email);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        toast.success(data.message);
      }
      else{
        toast.error(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-w-screen-2xl m-2 md:mx-auto   bg-coverr">
        <div className="h-[100vh] ">
          <div className="p-2 md:p-10 mt-[1.5rem] sm:mt-[5.6rem] bg-white max-w-screen-md mx-auto   shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]">

            <h2 className="text-2xl font-semibold  text-gray-800 mb-4">
              Sign in
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2 border border-gray-200 focus:border-[#0284c7]  bg-white focus:outline-none ]"
                  />
                  
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-2 border border-gray-200 focus:border-[#0284c7]  bg-white focus:outline-none "
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 border border-[#0284c7] text-[#0284c7]  hover:text-white hover:bg-[#0284c7] font-semibold "
              >
                Sign in
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-[#0284c7] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
