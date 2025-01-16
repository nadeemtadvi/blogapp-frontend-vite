import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/Endpoint";
import toast from "react-hot-toast";
import { navbar } from "../Constant/constants";
import { useAuth } from "../Contextapi/UserContext";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [show, setshow] = useState(false);

  const handleShow = () => {
    setshow((prev) => !prev);
  };

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
    <div className="">
      <div className=" max-w-screen-2xl mx-auto  p-2 sm:p-4  ">
        <div className="flex justify-between items-center ">
          <div className=" sm:block flex justify-center items-center">
            <Link to={"/"}>
              <div className="text-black font-bold  uppercase  p-1 rounded">
                <span className="text-[#fd472f] text-[1.5rem]">
                  {navbar.NAV_LOGO}
                </span>
                <span className="text-[#fd472f] text-[1.5rem]">
                  {navbar.NAV_LOGO_H}
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className=" flex gap-10 items-center ">
              <div className="cursor-pointer">
                <Link to={"/textai"}>
                  <h2 className="text-[20px] font-bold text-stone-600 hover:bg-stone-100 p-1 rounded  transition-all ease-in-out duration-100 items-center gap-0 flex flex-col justify-center">
                    <span className="inline-block leading-normal ">AI</span>
                    <span className="inline-block border-t border-stone-200 pt-1 leading-none text-[10px]">
                      Text Generator
                    </span>
                  </h2>
                </Link>
              </div>
              {user && user.fullName ? (
                <div className="hover:bg-stone-100 p-1 rounded profile-show">
                  <h2 className=" capitalize font-semibold  text-stone-800 text-[16px] ">
                    {user.fullName}
                  </h2>
                  <p className=" font-normal text-stone-600 text-[12px] italic">
                    ({user.email})
                  </p>
                </div>
              ) : null}
              {user && user.fullName ? (
                <div className="dropdown relative">
                  {" "}
                  <button className="rounded text-[16px] flex items-center justify-center font-normal w-[140px]  whitespace-nowrap border py-1.5 text-stone-800 border-stone-200 hover:text-white hover:border-[#472ffd] hover:bg-[#472ffd]">
                    <span>Write a blog</span>
                  </button>
                  <div className="dropdown-menu absolute top-[40px] left-0 right-0 m-auto bg-white rounded-lg shadow-lg p-2">
                    <ul className="text-[14px] text-stone-800 font-normal whitespace-nowrap">
                      <li className="p-1.5 hover:bg-stone-100">
                        <Link to={"/writepost"}>
                          <span className="inline-block">Create Post</span>
                        </Link>
                      </li>

                      <li className="p-1.5 hover:bg-stone-100">
                        <Link to={"/allpost"}>
                          <span className="inline-block">Edit Post</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}
              {!user || !user.fullName ? (
                <div className="text-end">
                  <Link to={"/login"}>
                    <button className="rounded p-1.5 w-[140px]  text-[16px] font-normal border-[#472ffd] bg-[#472ffd]  text-white  whitespace-nowrap border hover:bg-white hover:border-[#472ffd] hover:text-[#472ffd] ">
                      Sign in
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="text-end">
                  <Link onClick={handleLogout}>
                    <button className="rounded p-1.5 w-[140px] text-[16px] font-normal border-[#fd472f] bg-[#fd472f]  text-white  whitespace-nowrap border hover:bg-white hover:border-[#fd472f] hover:text-[#fd472f]">
                      Logout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="relative lg:hidden block">
            <div className="">
              <HiOutlineMenu
                onClick={() => handleShow()}
                className="text-[20px]"
              />
            </div>
            {show && (
              <div>
                <div class="bg-white rounded-lg shadow-lg p-2  absolute top-0 right-0 z-[20]">
                  <ul className="text-[14px] font-normal whitespace-nowrap">
                    {user && user.fullName ? (
                      <li className="border-b border-stone-200 p-1.5 hover:bg-stone-100">
                        {user.fullName}{" "}
                        <p className="text-stone-600 text-[12px] italic">
                          ({user.email})
                        </p>
                      </li>
                    ) : null}
                    <li className="border-b border-stone-200 p-1.5 hover:bg-stone-100">
                      {" "}
                      <Link to={"/textai"}>AI - Text Generator</Link>
                    </li>
                    {user && user.fullName ? (
                      <li className=" border-b border-stone-200 p-1.5 hover:bg-stone-100">
                        <Link to={"/writepost"}>Create Post</Link>
                      </li>
                    ) : null}
                    {user && user.fullName ? (
                      <li className=" border-b border-stone-200 p-1.5 hover:bg-stone-100">
                        <Link to={"/allpost"}>Edit Post</Link>
                      </li>
                    ) : null}
                    {!user || !user.fullName ? (
                      <li className="p-1.5 hover:bg-stone-100">
                        <Link to={"/login"}>
                          {" "}
                          <span>Sign in</span>
                        </Link>
                      </li>
                    ) : (
                      <li className="p-1.5 hover:bg-stone-100">
                        <Link onClick={handleLogout}>
                          {" "}
                          <span>Logout</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div
                  onClick={() => handleShow()}
                  class="fixed w-full h-full left-0 top-0  z-[10] bg-opacity-50  "
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
