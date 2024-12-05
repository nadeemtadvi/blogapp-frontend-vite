import React, { useState } from "react";
import Addpost from "./Admin/Addpost";
import Allpost from "./Admin/Allpost";

const Writeblog = () => {
  const [active, setActive] = useState("Create Post")

  return (
    <div className="border-t border-gray-300  ">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="px-2 sm:px-4 mx-auto ">
          <div className="grid grid-cols-[auto_260px]">
            <div className="border-r  border-gray-300 ">
            <div>
              {active === "Create Post" && <Addpost/>}
              {active === "Edit Post" && <Allpost/>}
            </div>
            </div>
            <div className="bg-white">
              <h4 className=" py-2.5 text-[1rem] font-medium mx-2">
                Customization
              </h4>
              <div className=" ">
                <ul>
                  <li  className={`p-2.5 text-[0.8rem] text-gray-600 ${
                      active === "Create Post" ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-600"
                    } mb-1 cursor-pointer mx-2`}
                    onClick={() => setActive("Create Post")}>Create Post</li>
                  <li className={`p-2.5 text-[0.8rem]  ${
                      active === "Edit Post" ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-600"
                    } mb-1 cursor-pointer mx-2`}
                    onClick={() => setActive("Edit Post")}>Edit Post</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writeblog;
