import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserLayout from "./Layouts/UserLayout";
import Addpost from "./pages/Addpost";
import Allpost from "./pages/Allpost";
import { Toaster } from "react-hot-toast";
import Writeblog from "./pages/Writeblog";
import ContentGenerator from "./Components/ContentGenerator";



function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<Post />}></Route>
            <Route path="updateprofile/:id" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="addpost" element={<Addpost />} />
            <Route path="allpost" element={<Allpost />} />
            <Route path="writepost" element={<Writeblog />} />
            <Route path="textai" element={<ContentGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
