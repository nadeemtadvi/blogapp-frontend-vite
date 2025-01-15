import React, { useState } from "react";
import RecentPost from "../Components/RecentPost";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <div className="">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="">
          <div className="">
            <div className="">
              <div className="sm:flex justify-between items-center p-2 sm:p-4 ">
              <div className="py-2 sm:py-6 text-center  text-[20px] text-stone-600 font-semibold">
                  <span className="underline">
                    Recent Post
                  </span>
                </div>
                <form className="sm:w-[400px] my-4 sm:my-0 border border-stone-200 rounded">
                  <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-stone-500 dark:text-stone-400"
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
                      className="block w-full rounded  p-2 ps-10 text-[16px] font-normal text-stone-900    focus:ring-[#472ffd] focus:border-[#472ffd] outline-none"
                      placeholder="Search"
                      required=""
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>
                
                <div></div>
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
