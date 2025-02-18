import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(_auto-fit,minmax(19rem,1fr)_)] sm:grid-cols-[repeat(_auto-fit,minmax(21rem,1fr)_)] gap-4 mb-24">
      {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`md:w-[400px]`}
          >
            <div className="p-[0.5rem_0.5rem_0] sm:p-[1.2rem_1.2rem_0] ">
              <div className="h-[250px] animate-pulse sm:h-[200px] bg-stone-300 rounded"></div>
            </div>
            <div className="m-[0.5rem] sm:m-[1.5rem] ">
              <div>
                <h5 className="mb-2 w-[85%] h-[24px] bg-stone-300 animate-pulse rounded"></h5>
              </div>
              <div className="mb-1 ">
                <p className="h-[24px] w-[85%] mb-1 bg-stone-300 animate-pulse rounded"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
