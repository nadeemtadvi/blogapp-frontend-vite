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
    <div className="max-w-screen-xl mx-auto ">

      <div className="mt-[1.5rem] md:mt-[2rem] mb-[8rem]  text-black">
        <div className="p-2 md:p-10 sm:max-w-screen-lg m-2 md:mx-auto ">
        <h3 className="text-[1.98rem] mb-8 sm:text-[2rem]  font-semibold">{onPosts && onPosts?.title}</h3>
          <div className="blog-cove     object-fit w-full">
            <img
             src={onPosts && `${BaseUrl}/${onPosts.image}`}
              alt=""
              className="object-cover bg-top w-full rounded-[10px] sm:h-[500px] "
            />
          </div>
          <div className="mt-[1rem] mb-[4rem] text-[24px] font-light" >
            <h5>{onPosts && onPosts.desc}</h5>
          </div>
          
          <div className="my-[1rem] text-gray-400">
            <form className="" action="" >
              <div>
                <div>
                  <label htmlFor="" className="text-[20px] font-light">Comment</label>
                </div>

                <textarea
                  className="rounded-[8px] my-2 w-full text-[20px] font-light p-3 border border-gray-200 outline-none  focus:border-[#0284c7]"
                  name=""
                  id=""
                  rows="4"
                  placeholder="Write your comment here"
                ></textarea>
              </div>
              <div className="text-end">
              <button
                type="submit"
                className="mt-4 rounded-[8px] inline-flex items-center px-3 py-2 text-[20px] font-light text-center text-[#0284c7] hover:text-white border border-[#0284c7] hover:bg-[#0284c7]  "
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
