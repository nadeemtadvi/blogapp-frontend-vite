import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl, get, post } from "../services/Endpoint";


const Post = () => {
const {id} = useParams()
const [onPosts, setOnPost] = useState(null)
const [loaddata, setLoaddata] = useState(false);
console.log("idid:", id)


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
      <div className="mt-[1.5rem] md:mt-[4rem] mb-[8rem]  text-black">
        <div className="p-2 md:p-10 sm:max-w-screen-md m-2 md:mx-auto  bg-white shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]">
        <h3 className="text-[1.42rem] mb-8 sm:text-[2rem] font-medium">{onPosts && onPosts?.title}</h3>
          <div className="blog-cover  overflow-hidden  sm:h-[386px] w-full">
            <img
             src={onPosts && `${BaseUrl}/${onPosts.image}`}
              alt=""
              className="object-fill w-full"
            />
          </div>
          <div className="mt-[1rem] mb-[4rem]" >
            <h5>{onPosts && onPosts.desc}</h5>
          </div>
          
          <div className="my-[1rem] text-gray-400">
            <form className="" action="" >
              <div>
                <div>
                  <label htmlFor="">Comment</label>
                </div>

                <textarea
                  className="my-2 w-full  p-3 border border-gray-200 outline-none  focus:border-[#0284c7]"
                  name=""
                  id=""
                  rows="2"
                  placeholder="Write your comment here"
                ></textarea>
              </div>
              <div className="text-end">
              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0284c7] hover:text-white border border-[#0284c7] hover:bg-[#0284c7]  "
              >
                Submit Comment
              </button>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
