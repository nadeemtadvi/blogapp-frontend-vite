import React, { useState } from "react";
import toast from "react-hot-toast";
import { post } from "../services/Endpoint";

const Addpost = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Description before submit:", description);

    try {
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }
      formData.append("title", title);
      formData.append("desc", description);

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const res = await post("/blog/create", formData);
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setImage(null);
        setDescription("");
        document.getElementById("image").value = "";
      } else {
        toast.error("Failed to create post. Try again.");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-screen-md mx-auto  p-2 sm:p-10 mb-16">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full  bg-white   rounded-[12px] p-2 sm:p-4 md:p-10"
          encType="multipart/form-data"
        >
        

          <div className="mb-4">
            <label className="block text-gray-700  mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full rounded-r-[8px] border overflow-hidden   border-gray-200 text-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700  mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full px-3 py-2 border rounded-[8px] border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700  mb-2" htmlFor="description">
              Description
            </label>
           
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your post description here"
              className="w-full px-3 py-2 border rounded-[8px]  border-gray-200 focus:outline-none focus:ring-1 focus:ring[#0284c7]"
              rows="4"
            />
          </div>

          <button className="w-full border rounded-[8px] border-[#0284c7] text-[#0284c7] py-2  font-medium hover:bg-[#0284c7] hover:text-white">
          Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpost;
