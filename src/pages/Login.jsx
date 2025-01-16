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
      <div className="max-w-screen-2xl m-2 md:mx-auto ">
        <div className="h-[100vh] ">
          <div className="flex justify-center items-center p-2 mt-6 md:mt-12">

           

            <form onSubmit={handleSubmit} className="w-full md:w-[36%] border border-stone-200  text-[16px] font-medium rounded p-2 sm:p-4 bg-stone-100">
            <h2 className="text-[16px] font-semibold  text-stone-800 mb-6">
              Sign in
            </h2>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="rounded w-full px-4 py-2 border border-stone-200 focus:border-[#472ffd]  bg-white focus:outline-none ]"
                  />
                  
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="rounded w-full px-4 py-2 border border-stone-200 focus:border-[#472ffd]  bg-white focus:outline-none "
                />
              </div>

              <button
                type="submit"
                className="rounded w-full py-2 border border-[#472ffd] hover:bg-white hover:text-[#472ffd]  text-white bg-[#472ffd]  "
              >
                Sign in
              </button>
              <div className="mt-6 text-center ">
              <p className="text-stone-800 ">
                Don't have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-[#472ffd] hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </div>
            <div className="p-4 bg-white w-fit mt-6 mb-3 border border-stone-200 rounded">
              <h2 className="font-semibold text-[12px] text-red-600">----- Warning ----</h2>
              <p className="text-[12px]">Admin : kevin@gmail.com</p>
              <p className="text-[12px]"> pswrd : 123456</p>
            </div>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
