import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl, get, post } from "../services/Endpoint";


const Post = () => {
const {id} = useParams()
const [onPosts, setOnPost] = useState(null)
const [loaddata, setLoaddata] = useState(false);



useEffect(() => {
  const singlePost = async () => {
    try {
      const res = await get(`/public/singlepost/${id}`)
      const data = res.data
      setOnPost(data.Post)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  singlePost()
},[loaddata,id])

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="mt-[4rem]  text-black">
        <div className=" p-2 sm:p-0 sm:max-w-[70%] mx-auto mt-[1rem]">
        <h3 className="text-[1.42rem] mb-3 sm:text-[2rem] font-medium">{onPosts && onPosts?.title}</h3>
          <div className="blog-cover  overflow-hidden  sm:h-[386px] w-full">
            <img
             src={onPosts && `${BaseUrl}/${onPosts.image}`}
              alt=""
              className="object-fill w-full"
            />
          </div>
          <div className="my-[1rem]">
            <h5>{onPosts && onPosts.desc}</h5>
          </div>
          <hr />
          <div className="my-[1rem]">
            <form className="" action="" >
              <div>
                <div>
                  <label htmlFor="">Comment</label>
                </div>

                <textarea
                  className="my-2 w-full  p-3 border border-gray-200"
                  name=""
                  id=""
                  rows="2"
                  placeholder="Write your comment here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#001beb]  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#001beb] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit Comment
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
