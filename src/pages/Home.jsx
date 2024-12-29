import React, { useState } from "react";
import RecentPost from "../Components/RecentPost";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <div className="">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="m-2 sm:m-10">
          <div className="">
            <div className="">
              <div className="sm:flex justify-between items-center px-[1.5rem]">
                <div className="py-2 sm:py-6 text-center  text-[28px] text-gray-600 font-medium">
                  <span className="">
                    Latest Post
                  </span>
                </div>
                <form className="sm:w-[400px] my-4 sm:my-0 ">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full rounded-[8px]  p-2 ps-10 text-[20px] font-light text-gray-900   focus:ring-[#0284c7] focus:border-[#0284c7] outline-none"
                      placeholder="Search"
                      required=""
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="  ">
                <RecentPost searchQuery={searchQuery} />
              </div>
             
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
