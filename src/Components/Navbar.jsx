import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseUrl, get, post } from "../services/Endpoint";
import toast from "react-hot-toast";
import { HiMenu } from "react-icons/hi";
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
    <div className="max-w-screen-2xl mx-auto bg-white p-2 sm:p-4">
      <div className="flex justify-between items-center">
        <div className="flex sm:block items-center gap-2">
          <div className="sm:hidden block">
            <HiMenu className="text-[27px]" />
          </div>
          <Link to={"/"}>
            <div className="text-black font-bold text-[1.5rem] uppercase">
              <span className="text-[#EB5B00]">{navbar.NAV_LOGO}</span>
              <span className="text-[#FFB200]">{navbar.NAV_LOGO_H}</span>
            </div>
          </Link>
        </div>
        <div className="flex gap-16 items-center">
          {user && user.fullName ? (
            <div className="userName relative  text-[0.86rem]  cursor-pointer">
              <h2 className=" capitalize font-medium px-4 py-2 text-gray-900 hover:bg-gray-100">
                {user.fullName}
              </h2>
              <ul className="user-child">
                <li className="px-4 py-2 border-b border-gray-300">
                  {user.email}
                </li>
                <li className="p-1.5 ">
                  <Link to={'/writepost'}>                  <button className="whitespace-nowrap border p-[5px_28px_6px] bg-gray-50 border-gray-300">
                    Write a blog
                  </button>
                  </Link>

                </li>
              </ul>
            </div>
          ) : null}
          {!user || !user.fullName ? (
            <Link to={"/login"}>
              <button className="p-[5px_28px_6px]    bg-[#001beb]  text-white font-semibold ">
                Sign in
              </button>
            </Link>
          ) : (
            <Link onClick={handleLogout}>
              <button className="p-[5px_28px_6px]    bg-[#fd472f]  text-white font-semibold ">
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
