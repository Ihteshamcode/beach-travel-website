import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 my-4">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className=" text-3xl ">Beaches</h1>
          <div className="flex justify-between px-4 my-4 w-full sm:max-w[280px] md:justify-end md:space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <ul className="text-left lg:flex space-x-6 space-y-4">
          <li></li>
          <li>About</li>
          <li>Partnership</li>
          <li>Career</li>
          <li>Newsroom</li>
          <li>Advertising</li>
        </ul>

        <ul className="text-right lg:flex space-x-6 space-y-4">
          <li></li>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
