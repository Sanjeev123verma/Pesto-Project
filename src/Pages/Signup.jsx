import React from "react";
import { FaUser } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  <h1 className=" font-abc font-black"> This is a Home </h1>;
  return (
    <>
      <section className=" flex items-center justify-center text-center my-10 ">
        <main>
          <div className=" w-full font-abc flex text-4xl font-black text-center items-center justify-center pb-4 border-b-2">
            <h1> Only For WholeSellers </h1>
          </div>

          <h3 className=" font-abc flex text-2xl font-medium text-center items-center justify-center pb-3 pt-2">
            {" "}
            Register/Sign-up{" "}
          </h3>

          <div className=" flex flex-col items-center w-[400px] shadow-2xl bg-[#1c085d] text-[#ea001b] rounded-lg font-abc ">
            <form className=" p-6  shadow-2xl bg-[#1c085d]">
              <div></div>

              <div className=" flex  items-center  justify-center">
                <label htmlFor="username">
                  {" "}
                  <FaUser className=" size-7 mr-4" />{" "}
                </label>
                <input
                  type="text "
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  className=" border w-full text-base px-2 py-1 rounded-md text-black capitalize "
                  placeholder="Enter your name"
                />
              </div>
              <br />
              <div className=" flex  items-center  justify-center">
                <label htmlFor="email">
                  {" "}
                  <MdAttachEmail className=" size-6 mr-4" />{" "}
                </label>
                <input
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                />
              </div>
              <br />
              <div className=" flex  items-center  justify-center">
                <label htmlFor="phone">
                  {" "}
                  <FaPhoneAlt className=" size-5 mr-4" />{" "}
                </label>
                <input
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                  type="number"
                  name="phone"
                  placeholder="Enter your phonenumber"
                  id="phone"
                  required
                  autoComplete="off"
                />
              </div>
              <br />
              <div className=" flex  items-center  justify-center">
                <label htmlFor="Password">
                  {" "}
                  <RiLockPasswordLine className=" size-6 mr-4" />{" "}
                </label>
                <input
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                  type="password"
                  name="Password"
                  placeholder="Enter your Password"
                  id="Password"
                  required
                  autoComplete="off"
                />
              </div>
              <br />
              <div className=" flex  items-center  justify-center">
                <label htmlFor="Password">
                  {" "}
                  <RiLockPasswordFill className=" size-6 mr-4" />
                </label>
                <input
                  type="password"
                  name="Password"
                  placeholder="re-enter your Password"
                  id="Password"
                  required
                  autoComplete="off"
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                />
              </div>
              <br />
              {/* <button className=' items-center bg-blue-500 rounded-md px-2 p-1 mb-2'> Register </button> */}

              <button
                class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
              hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
              >
                Register
              </button>

              <p>
                {" "}
                Already have account{" "}
                <a href="/Login" className=" font-bold">
                  {" "}
                  Login{" "}
                </a>{" "}
                here{" "}
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Signup;
