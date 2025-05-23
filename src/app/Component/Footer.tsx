import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-2 py-4 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-0 mt-10">
        {/* Contact Info */}
        <div className="space-y-6 ">
          <div>
            <h2 className="text-lg font-bold text-blue-400">VISIT US</h2>
            <p className="text-white underline cursor-pointer">
              26A, 1st Floor, 22, Patel Ram Reddy Rd,<br />
              K.R.Colony, Domlur I Stage, Bengaluru
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400">CALL US</h2>
            <p className="text-blue-500 underline cursor-pointer">
              +91 8296669344
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400">EMAIL</h2>
            <p className="text-blue-500 underline cursor-pointer">
              paahi.pro@gmail.com
            </p>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500">
              <FaYoutube />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form Heading */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-6">
            <span className="text-blue-400">Get In Touch</span> With Us
          </h2>
          {/* You can add a form here later if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
