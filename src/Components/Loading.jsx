import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(_auto-fit,minmax(19rem,1fr)_)] sm:grid-cols-[repeat(_auto-fit,minmax(21rem,1fr)_)]  mb-24">
      {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`border-r border-b border-gray-200 md:w-[400px]`}
          >
            <div className="p-[0.5rem_0.5rem_0] sm:p-[2rem_2rem_0] ">
              <div className="h-[160px] animate-pulse sm:h-[200px] bg-gray-300"></div>
            </div>
            <div className="p-[0.5rem] sm:p-[0.7rem_2rem_0.7rem]">
              <div>
                <h5 className="mb-2 w-full h-[24px] bg-gray-300 animate-pulse"></h5>
              </div>
              <div className="mb-1 ">
                <p className="h-[24px] mb-1 bg-gray-300 animate-pulse"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
