import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, get } from "../services/Endpoint";
import Loading from "./Loading";

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
                  searchQuery ? " md:w-[400px]" : ""
                } bg-[#f3f4f6] mb-3 `}
              >
                <div className=" p-[0.5rem_0.5rem_0] sm:p-[1.2rem_1.2rem_0] ">
                  <a href="#">
                    <img
                      className="h-[300px] w-full object-fit rounded-[12px]"
                      src={`${BaseUrl}/${post.image}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="m-[0.5rem] sm:m-[1.5rem] ">
                 
                  <div
                    onClick={() => handleNavigate(post._id)}
                    className="  hover:text-blue-600 cursor-pointer"
                  >
                    <h5 className="  text-ellips-singleLine mb-1 text-[26px] font-semibold tracking-tight text-gray-900 hover:text-blue-800">
                      {post.title}
                    </h5>
                   
                  </div>
                  <div
                    className="mb-1  text-[24px] text-gray-700 dark:text-gray-400 text-ellips font-light"
                    dangerouslySetInnerHTML={{ __html: post.desc }}
                  ></div>
                <p onClick={() => handleNavigate(post._id)} className="text-blue-600 font-light text-end text-[20px] hover:underline">Read more</p>
                </div>
                
              </div>
            );
          })
        ) : (
          <div className="">
            <Loading/>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPost;
