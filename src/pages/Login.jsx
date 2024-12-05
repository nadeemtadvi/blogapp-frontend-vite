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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto   bg-coverr">
        <div className="">
          <div className="p-2.5 sm:p-5 sm:w-[35%] mx-auto my-[6rem]">
            {/* Logo */}

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
                    className="w-full px-4 py-2 border border-gray-200  focus:outline-none focus:ring-1 focus:ring-[#001beb]"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12v2a4 4 0 11-8 0v-2m8 0a4 4 0 00-8 0v2m0 0a4 4 0 118 0v-2m-4-6v.01M12 5a7 7 0 110 14A7 7 0 0112 5z"
                      />
                    </svg>
                  </div>
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
                  className="w-full px-4 py-2 border border-gray-200  focus:outline-none focus:ring-1 focus:ring-[#001beb]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#001beb] hover:bg-blue-700 text-white font-semibold "
              >
                Sign in
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-[#001beb] hover:underline"
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
