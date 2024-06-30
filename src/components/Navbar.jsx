// src/Navbar.js
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();
  const cartitemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="sticky top-0 md:z-50 z-30 max-w-[100%] mx-auto bg-gray-100 md:text-[white] md:shadow-2xl shadow-xl items-center font-ccc  font-semibold">
      <div className="max-w-full mx-auto px-6 sm:px-6 lg:px-8 items-center ">
        <div className="flex justify-between items-center text-center h-24">
          <div className="flex-shrink-0 items-center text-center">
            <img
              src="/Images/Pestobazaarlogo.png"
              alt="logo"
              className=" md:w-40 w-32 cursor-pointer rounded-lg items-center"
            />
          </div>

          <div className=" flex relative items-center bg-white rounded-full pr-4  border-black border-2">
            <input
              type="text"
              placeholder="Search... "
              className=" md:min-w-[350px] max-w-96 bg-white text-black rounded-full pl-4 md:pl-8 pr-2 md:pr-5 md:py-2 py-1 px-2 md:px focus:outline-none focus:bg-white capitalize text-lg"
            />
            <button type="submit" className=" pl-4 text-2xl text-[#1a185e]">
              {" "}
              <IoSearch />{" "}
            </button>
          </div>

          {/* added home, Products, aboutus. */}
          <div className="  hidden md:flex px-2 space-x-4 text-center items-center justify-center">
            <NavLink
              to="/"
              className="block bg-[#1c085d] hover:bg-[#ea001b] rounded-md text-base font-medium p-2 px-4"
            >
              Home
            </NavLink>

            <NavLink
              to="Products"
              className="bg-[#1c085d] hover:bg-[#ea001b] block rounded-md text-base font-medium p-2 px-4"
            >
             Shop
            </NavLink>


            <NavLink
              to="About us"
              className=" bg-[#1c085d] hover:bg-[#ea001b] block rounded-md text-base font-medium p-2 px-4"
            >
                About   
            </NavLink>

            <NavLink
              to="Contact us"
              className="bg-[#1c085d] hover:bg-[#ea001b] block rounded-md text-base font-medium p-2 px-4"
            >
              Blog
            </NavLink>

            <NavLink
              to="Contact us"
              className="bg-[#1c085d] hover:bg-[#ea001b] block rounded-md text-base font-medium p-2 px-4"
            >
                Contact us
             
            </NavLink>

           
          </div>

          <div className=" flex items-center">
            
            <div className="hidden md:block text-center items-center py-2 text-2xl"> 
                            <button className=" flex flex-row items-center text-center font-abc font-semibold hover:bg-gray-300 px-3 py-2 rounded-md text-[#1a185e] space-x-2">
                {" "}
                <FaUserCircle /> <NavLink to="/Signup"> Account </NavLink>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4 items-center text-2xl">
                <button className=" flex flex-row items-center font-abc hover:bg-gray-300 px-3 py-2 rounded-md text-[#1a185e] space-x-2">
                  <BsFillCartPlusFill /> <NavLink to="/Cart"> Cart

                  {/* added  cartitemCount here  */}
                  {/* ({cartitemCount > 0 && (
                  )})  */}
                   <span className="absolute top-6 right-20 text-white text-sm bg-[#ea001b] p-2 rounded-full h-2 w-2 flex items-center justify-center">
                      {cartitemCount}
                    </span>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-indigo-900 hover:text-[#ea001b] focus:outline-none "
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center items-center justify-center py-2">
           {/* <div className="w-100% absolute top-16 py-2 text-2xl mx-[46%] ">
           
          </div> */}

          <ul className=" flex flex-col text-center items-center">
            <li className=" text-2xl text-center hover:bg-[#ea001b] px-3 py-2 rounded-full"> 
            <NavLink to="/Signup">
              {" "}
              <FaUserCircle />{" "}
            </NavLink>
            </li>

            <li> 
            <NavLink
            to="/"
            className="hover:bg-[#ea001b] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home{" "}
          </NavLink>{" "}
           </li>
           <li>
           <NavLink
            to="Products"
            className="hover:bg-[#ea001b] block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </NavLink>{" "}
           </li>
           <li>
           <NavLink
            to="About us"
            className="hover:bg-[#ea001b] block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </NavLink>{" "}
           </li>
           <li>
           <NavLink
            to="Contactus"
            className="hover:bg-[#ea001b] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </NavLink>{" "}
           </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
