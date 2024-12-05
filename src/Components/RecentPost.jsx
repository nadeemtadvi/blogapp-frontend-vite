import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, get } from "../services/Endpoint";

const RecentPost = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);


  const filteredPosts = post.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigate = (id) => {
    navigate(`/post/${id}`);
  };

  const getpost = async () => {
    try {
      const res = await get("/blog/getpost");
      const data = res.data;
      setPost(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[repeat(_auto-fit,minmax(18rem,1fr)_)] gap-3 mb-24">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            return (
              <div
                key={index}
                className={`${
                  searchQuery ? "md:w-[400px]" : ""
                } bg-white border border-gray-200  p-2 sm:p-2.5 `}
              >
                <div className="  ">
                  <a href="#">
                    <img
                      className=" h-[160px] sm:h-[200px] w-full object-fit "
                      src={`${BaseUrl}/${post.image}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="">
                 
                  <div
                    onClick={() => handleNavigate(post._id)}
                    className="flex justify-between items-center  hover:text-blue-800 cursor-pointer"
                  >
                    <h5 className="mb-1 text-[23px] font-semibold tracking-tight text-gray-900 hover:text-blue-800">
                      {post.title}
                    </h5>
                    <svg
                      className="rotate-[-30deg] w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </div>
                  <div
                    className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-ellips"
                    dangerouslySetInnerHTML={{ __html: post.desc }}
                  ></div>
                </div>
             
              </div>
            );
          })
        ) : (
          <div className="h-screen">
            <p>No post Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPost;
