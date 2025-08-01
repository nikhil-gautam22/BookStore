import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //  return ()=>{
    //    window.removeEventListener('scroll',handleScroll);
    //  }
  }, []);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/course"}>Course</Link>
      </li>
      <li>
        <Link to={"/contactus"}>Contact</Link>
      </li>
      <li>
        <Link to={"/aboutus"}>About</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
      ${
        sticky
          ? " sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out "
          : ""
      }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-900 dark:text-white"
              >
                {navItems}
              </ul>
            </div>
            <Link to={"/"} className=" text-2xl font-bold cursor-pointer">BookStore</Link>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-bold text-lg ">
                {navItems}
              </ul>
            </div>
            <div className="hidden md:block">
              <label className="px-2 py-2 border border-2 rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className={`grow outline-none rounded-md dark:text-white ${
                    sticky ? "dark:bg-slate-700" : "dark:bg-slate-900"
                  }`}
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {authUser ? (
              <LogOut />
            ) : (
              <div>
                <a
                  className="bg-black ml-2 text-white py-2 px-3 rounded-md  hover:bg-slate-500 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
