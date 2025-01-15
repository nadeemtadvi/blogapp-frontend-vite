import React from 'react';
import insta from '../assets/Icon/social.png'
import twitter from '../assets/Icon/twitter.png'
import Linkedin from '../assets/Icon/linkedin.png'
import git from '../assets/Icon/github.png'

const Footer = () => {
  return (
  <div className="">
    <div className="max-w-screen-xl mx-auto ">
    <div className="p-1.5 sm:p-3 flex justify-between items-center">
      <h4 className="text-[0.65rem] sm:text-[13px] font-medium text-subtext">@ 2024 All Rights Reserved</h4>
      <h4 className="text-[0.65rem] sm:text-[13px] font-medium underline text-subtext">Designed by Nadeem</h4>
      <div className=" footer-icon flex-wrap flex justify-between items-center gap-1 sm:gap-5">
        <img
        src={insta}
        alt='insta'
        width={24}
        height={24}
        />
        <img
        src={twitter}
        alt='insta'
        width={24}
        height={24}
        />
        <img
        src={Linkedin}
        alt='insta'
        width={24}
        height={24}
        />
        <img
        src={git}
        alt='insta'
        width={24}
        height={24}
        />
      
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer