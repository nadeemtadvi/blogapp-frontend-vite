import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  post } from "../services/Endpoint";
import toast from "react-hot-toast";
import { navbar } from "../Constant/constants";
import { useAuth } from "../Contextapi/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await post("/auth/logout");
      const data = res.data;
      console.log(data);
      if (res.status === 200) {
        logout();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
    <div className=" max-w-screen-2xl mx-auto  p-2 sm:p-4 border-b border-gray-200 ">
      <div className="md:flex justify-between items-center">
        <div className="md:mb-0 mb-4">
          
          <Link to={"/"}>
            <div className="text-black font-bold text-[1.5rem] uppercase">
              <span className="text-[#EB5B00]">{navbar.NAV_LOGO}</span>
              <span className="text-[#FFB200]">{navbar.NAV_LOGO_H}</span>
            </div>
          </Link>
        </div>
       
        <div className="sm:flex gap-10 items-center ">
        <div className="cursor-pointer">
        <Link to={"/textai"}>
          <h2 className="text-[1.8rem] font-bold text-gray-600 hover:scale-[1.09]  transition-all ease-in-out duration-100">AI<span className="text-[10px]">Text Generate</span></h2>
          </Link>
        </div>
          {user && user.fullName ? (
            <div className="sm:mb-0 mb-2 flex sm:gap-10 justify-between sm:justify-start items-center relative  text-[0.86rem] ">
              <div className="hover:text-blue-700 profile-show">
                <h2 className=" capitalize font-normal  text-gray-400 ">
                  {user.fullName}
                </h2>
                <p className=" font-normal text-gray-400">
                  {user.email}
                </p>
              </div>

              <div className=" ">
                <Link to={"/writepost"}>
                   {" "}
                  <button className="text-[0.86rem] w-[175px] font-medium whitespace-nowrap border p-[8px_48px_10px] bg-gray-50 text-gray-500 border-gray-300 hover:text-white hover:border-sky-600 hover:bg-sky-600">
                    Write a blog
                  </button>
                </Link>
              </div>
            </div>
          ) : null}
          {!user || !user.fullName ? (
            <div className="text-end">
            <Link to={"/login"}>
              <button className="p-[8px_48px_10px] w-[175px]  text-[0.86rem] border-[#0284c7] bg-[#0284c7]  text-white font-medium whitespace-nowrap border hover:bg-white hover:border-[#0284c7] hover:text-[#0284c7] ">
                Sign in
              </button>
            </Link>
            </div>
          ) : (
            <div className="text-end">
            <Link onClick={handleLogout}>
              <button className="p-[8px_48px_10px] w-[175px] text-[0.86rem] border-[#fd472f] bg-[#fd472f]  text-white font-medium whitespace-nowrap border hover:bg-white hover:border-[#fd472f] hover:text-[#fd472f]">
                Logout
              </button>
            </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
