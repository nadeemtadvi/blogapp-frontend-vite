import React, { useState } from "react";
import Addpost from "./Addpost";
import Allpost from "./Allpost";

const Writeblog = () => {
  const [active, setActive] = useState("Create Post");

  return (
    <div className="  ">
      <div className="max-w-screen-2xl mx-auto ">
        <div className=" mx-auto ">
          <div className="sm:grid grid-cols-[260px_auto]">
            
            <div className="bg-white border-b border-r sm:border-gray-200 pb-3 sm:pb-0 sm:h-[100%]">
              <h4 className=" py-2.5 text-[1rem] font-medium mx-2">
                Customization
              </h4>
              <div className=" ">
                <ul>
                  <li
                    className={`p-2.5 text-[0.8rem] text-gray-600 ${
                      active === "Create Post"
                        ? "bg-[#0284c7] text-white"
                        : "bg-gray-100 text-gray-600"
                    } mb-2 cursor-pointer mx-2`}
                    onClick={() => setActive("Create Post")}
                  >
                    Create Post
                  </li>
                  <li
                    className={`p-2.5 text-[0.8rem]  ${
                      active === "Edit Post"
                        ? "bg-[#0284c7] text-white"
                        : "bg-gray-100 text-gray-600"
                    } mb-1 cursor-pointer mx-2`}
                    onClick={() => setActive("Edit Post")}
                  >
                    Edit Post
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-r  border-gray-200 ">
              <div>
                {active === "Create Post" && <Addpost />}
                {active === "Edit Post" && <Allpost />}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writeblog;
