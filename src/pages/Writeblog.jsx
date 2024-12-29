import React, { useState } from "react";
import Addpost from "./Addpost";
import Allpost from "./Allpost";

const Writeblog = () => {
  const [active, setActive] = useState("Create Post");

  return (
    <div className="bg-white pb-12">
      <div className="max-w-screen-xl mx-auto ">
        <div className=" mx-auto ">
          <div className="sm:grid grid-cols-[260px_auto]">
            
            <div className="bg-white pb-3 sm:pb-0 sm:h-[100%]">
              <h4 className=" py-2.5 text-[24px] font-normal mx-2">
                Customization
              </h4>
              <div className=" ">
                <ul>
                  <li
                    className={`p-2.5 text-[20px] font-light text-gray-600 rounded-[8px] ${
                      active === "Create Post"
                        ? "bg-[#0284c7] text-white"
                        : "bg-gray-100 text-gray-600"
                    } mb-2 cursor-pointer mx-2`}
                    onClick={() => setActive("Create Post")}
                  >
                    Create Post
                  </li>
                  <li
                    className={`p-2.5 text-[20px] font-light rounded-[8px] ${
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
            <div className="bg-gray-100 rounded-[12px]">
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
