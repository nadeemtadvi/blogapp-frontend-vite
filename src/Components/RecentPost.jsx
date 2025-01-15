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
    <div className="p-2 sm:p-4  ">
      <div className="grid grid-cols-[repeat(_auto-fit,minmax(19rem,1fr)_)] sm:grid-cols-[repeat(_auto-fit,minmax(18rem,1fr)_)] gap-5 mb-24">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            return (
              <div
                key={index}
                className={`${ 
                  searchQuery ? " md:w-[300px]" : ""
                }  overflow-hidden  mb-3 `}
              >
                <div className="">
                  <a href="#">
                    <img
                      className="h-[240px] w-full object-fit rounded-t"
                      src={`${BaseUrl}/${post.image}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="p-3  border border-stone-200 rounded-b ">
                 
                  <div
                    onClick={() => handleNavigate(post._id)}
                    className="  hover:text-[#472ffd] cursor-pointer"
                  >
                    <h5 className="text-ellips-singleLine mb-1 text-[20px] font-medium  underline text-[#fd472f] hover:bg-[#472ffd] hover:text-white">
                      {post.title}
                    </h5>
                   
                  </div>
                  <div
                    className="mb-1  text-[18px] text-stone-900 dark:text-stone-400 text-ellips font-normal"
                    dangerouslySetInnerHTML={{ __html: post.desc }}
                  ></div>
                <p onClick={() => handleNavigate(post._id)} className="text-blue-900 font-normal text-end text-[14px] cursor-pointer underline">Read more</p>
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
