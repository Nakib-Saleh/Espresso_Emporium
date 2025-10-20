import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

import logo from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 rancho ftr sticky top-full">
      <div className="w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - Contact Info */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12 mb-4"
          />
          <h2 className="text-2xl font-bold">Espresso Emporium</h2>
          <p className="text-sm mt-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-xl hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-primary"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-primary"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-primary"><FaLinkedin /></a>
          </div>

          {/* Contact Info */}
          <div className="mt-6">
            <p>📞 +88 01533 333 333</p>
            <p>📧 info@gmail.com</p>
            <p>📍 72, Wall Street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <form className="mt-4 flex flex-col gap-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered w-full h-24"></textarea>
            <button className="btn bg-transparent w-fit text-black rounded-full border-black">Send Message</button>
          </form>
        </div>

        {/* Bottom Text */}
       
      </div>
      <div className="col-span-2 text-center mt-8 text-sm border-t p-4 cpy text-white ">
          Copyright © Espresso Emporium | All Rights Reserved
        </div>
    </footer>
  );
};

export default Footer;
