import React, { useState } from "react";
import { put } from "../services/Endpoint";
import toast from "react-hot-toast";

const UpdateModal = ({ handleOpenModal, postId }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postId) {
      toast.error("Post ID is missing!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await put(`/blog/update/${postId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        toast.success(res.data.message || "Post updated successfully!");
        setTitle("");
        setDesc("");
        setImage(null);
        document.getElementById("image").value = ""; 
        handleOpenModal(null); 
      } else {
        toast.error(res.data.message || "Failed to update the post.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      {/* Background overlay */}
      <div
        onClick={() => handleOpenModal(null)}
        className="fixed z-10 bg-[#0000006e] top-0 right-0 left-0 w-full h-full"
      ></div>

      {/* Modal */}
      <div
        className="w-full sm:w-[400px] md:w-[600px] fixed -translate-x-2/4 -translate-y-2/4 bg-white shadow-lg z-[1000]  left-1/2 top-1/2"
      >
        <div className="relative bg-white  ">
          <div className="flex items-center justify-between p-[1rem_2.4rem] border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Edit Post
            </h3>
            <button
              onClick={() => handleOpenModal(null)}
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900  p-2"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-[1rem_2.4rem_2.4rem]"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-200  "
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="w-full border border-gray-200  p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Write your post description here"
                className="w-full border border-gray-200  p-2"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full hover:text-white text-[#0284c7] border border-[#0284c7] py-2  font-medium hover:bg-[#0284c7]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
