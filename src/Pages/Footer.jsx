// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c085d] text-white py-10  px-4 mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Aboutus</h2>
          <p className="text-sm">
            We are a leading company in our industry, committed to providing quality products and exceptional customer service. Our mission is to make your shopping experience as enjoyable and convenient as possible.
          </p>
        </div>
        <div className=' flex flex-col text-center items-center'>
          <h2 className="text-lg font-semibold mb-4 ">Connect with Us</h2>
          <ul className='flex gap-3 pt-4'>
            <li><a href="https://facebook.com" className="text-sm hover:underline">  <FaFacebook size={20}/> Facebook </a></li>
            <li><a href="https://Whatsapp.com" className="text-sm hover:underline"> <FaWhatsapp size={20}/> Whatsapp </a></li>
            <li><a href="https://instagram.com" className="text-sm hover:underline">  <FaInstagram size={20}/> Instagram </a></li>
            <li><a href="https://linkedin.com" className="text-sm hover:underline"> <FaLinkedin size={20}/> LinkedIn </a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigate</h2>
          <ul>
            <li><a href="/shipping-and-returns" className="text-sm hover:underline">Shipping and Returns</a></li>
            <li><a href="/contact-us" className="text-sm hover:underline">Contactus</a></li>
            <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
            <li><a href="/our-brands" className="text-sm hover:underline">Brands</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Information</h2>
          <p className="text-sm">
            <strong>Address:</strong><br />
            1234 Street Name,<br />
            City, State, Zip Code<br />
            <strong>Contact Number:</strong><br />
            (123) 456-7890
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 text-sm text-gray-400">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
