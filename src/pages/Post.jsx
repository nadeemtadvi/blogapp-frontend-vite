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

      <div className="mt-[1.5rem] md:mt-[2rem] mb-[8rem]  text-black p-2 sm:p-4">
        <div className=" flex flex-col justify-center items-center">
        <h3 className="text-[1.98rem] mb-8 sm:text-[2rem]  font-semibold">{onPosts && onPosts?.title}</h3>
          <div className="object-fit lg:w-[30%] rounded overflow-hidden">
            <img
             src={onPosts && `${BaseUrl}/${onPosts.image}`}
              alt=""
              className="object-fill bg-top w-full  "
            />
          </div>
          <div className="mt-[1rem] mb-[4rem] text-[18px] font-normal lg:w-[80%]" >
            <h5>{onPosts && onPosts.desc}</h5>
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default Post;
