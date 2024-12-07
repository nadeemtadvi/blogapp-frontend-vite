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
      <div className="grid grid-cols-[repeat(_auto-fit,minmax(19rem,1fr)_)] sm:grid-cols-[repeat(_auto-fit,minmax(21rem,1fr)_)]  mb-24">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            return (
              <div
                key={index}
                className={`${
                  searchQuery ? "md:w-[400px]" : ""
                } bg-white border-r border-b border-gray-200  `}
              >
                <div className="p-[0.5rem_0.5rem_0] sm:p-[2rem_2rem_0] ">
                  <a href="#">
                    <img
                      className=" h-[160px] sm:h-[200px] w-full object-fit "
                      src={`${BaseUrl}/${post.image}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="p-[0.5rem] sm:p-[0.7rem_2rem_0.7rem]">
                 
                  <div
                    onClick={() => handleNavigate(post._id)}
                    className="  hover:text-blue-600 cursor-pointer"
                  >
                    <h5 className="text-ellips-singleLine mb-1 text-[20px] font-semibold tracking-tight text-gray-900 hover:text-blue-800">
                      {post.title}
                    </h5>
                   
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
