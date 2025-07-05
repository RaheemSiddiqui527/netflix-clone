'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-[#757575] py-[70px] px-[4%] mt-[50px]">
      <div className="max-w-[980px] mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-5 mb-[30px]">
          <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white transition duration-300" />
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white transition duration-300" />
          <FaTwitter className="w-6 h-6 cursor-pointer hover:text-white transition duration-300" />
          <FaYoutube className="w-6 h-6 cursor-pointer hover:text-white transition duration-300" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-8 mb-[20px] text-[13px]">
          <a href="#" className="hover:underline cursor-pointer">Audio Description</a>
          <a href="#" className="hover:underline cursor-pointer">Help Center</a>
          <a href="#" className="hover:underline cursor-pointer">Gift Cards</a>
          <a href="#" className="hover:underline cursor-pointer">Media Center</a>
          <a href="#" className="hover:underline cursor-pointer">Investor Relations</a>
          <a href="#" className="hover:underline cursor-pointer">Jobs</a>
          <a href="#" className="hover:underline cursor-pointer">Terms of Use</a>
          <a href="#" className="hover:underline cursor-pointer">Privacy</a>
          <a href="#" className="hover:underline cursor-pointer">Legal Notices</a>
          <a href="#" className="hover:underline cursor-pointer">Cookie Preferences</a>
          <a href="#" className="hover:underline cursor-pointer">Corporate Information</a>
          <a href="#" className="hover:underline cursor-pointer">Contact Us</a>
        </div>

        {/* Service Code Button */}
        <button className="border border-[#757575] bg-transparent text-[#757575] px-4 py-2 text-[13px] mb-[20px] hover:text-white hover:border-white transition duration-300">
          Service Code
        </button>

        {/* Copyright */}
        <div className="text-[13px] text-[#757575]">
          © 1997-2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;