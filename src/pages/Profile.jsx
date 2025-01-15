import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BaseUrl, patch } from "../services/Endpoint";

const Profile = () => {
  const [name, setName] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const { userId } = useParams();

  const handleUpdateProfile = async (e) => {
    e.preventDefault(); // Fixed prevent default typo
    const formData = new FormData();
    formData.append("FullName", name);
    formData.append("oldpassword", oldpassword);
    formData.append("newpassword", newpassword);
    if (profileImage) {
      formData.append("profile", profileImage);
    }
    try {
      const res = await patch(`/auth/updateprofile/${userId}`, formData); // Ensure patch method is correctly imported
      const data = res.data;
      if (res.status === 200) {
        toast.success(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // useEffect(() => {
  //   if (user) {
  //     setName(user.FullName); // Prefill form with current user name
  //   }
  // }, [user]); // Added user as a dependency

  return (
    <div className="mt-[3rem] sm:mt-0 sm:flex items-center justify-center min-h-screen max-w-screen-2xl mx-auto">
      <div className="border border-stone-200 p-2 mx-2 sm:mx-0 sm:p-6 shadow-md sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-black mb-4">
          Update Profile
        </h2>
        <form onSubmit={handleUpdateProfile} encType="multipart/form-data">
          <div className="mb-4">
            <div className="p-3 flex justify-center">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)} // Preview new image
                  alt="Avatar"
                  className="w-20 h-20 object-cover rounded-full"
                />
              ) : (
                <img
                src=""
                  // src={`${BaseUrl}/images/${user?.profile}`} // Display current image if no new image is uploaded
                  alt="Avatar"
                  className="w-20 h-20 object-cover rounded-full"
                />
              )}
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full  text-white border border-stone-200  focus:outline-none focus:ring focus:ring-[#472ffd]"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Update Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 text-stone-600 border border-stone-200  focus:outline-none focus:ring focus:ring-[#472ffd]"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Old Password"
              value={oldpassword}
              onChange={(e) => setOldpassword(e.target.value)}
              className="w-full px-4 py-2 text-stone-600 border border-stone-200  focus:outline-none focus:ring focus:ring-[#472ffd]"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="New Password"
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
              className="w-full px-4 py-2 text-stone-600 border border-stone-200  focus:outline-none focus:ring focus:ring-[#472ffd]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-lg bg-[#472ffd] hover:bg-blue-700 text-white font-semibold "
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
