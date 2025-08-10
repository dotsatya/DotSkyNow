import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative py-6 md:py-6"
    >
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>

      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between md:gap-12 px-4 md:px-12">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold hover:text-gray-600 transition-colors">
          <a href="#home">DotSkyNow</a>
        </h1>        

        {/* Copyright */}
        <span className="text-xs font-light text-gray-400text text-center md:text-right mt-4 md:mt-0">
          &copy; 2025 DotSkyNow, All rights reserved.
        </span>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 mt-2 md:mt-0">
          <a
            href="https://github.com/dotsatya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition-colors"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-sundar-dey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition-colors"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1VG4ofpW1E/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl  hover:text-gray-400 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/satya_sundar_dey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl  hover:text-gray-400 transition-colors"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
