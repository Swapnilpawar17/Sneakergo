import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="  h-50 bg-gray-950 ">
        <nav className="w-100%  mt-1">
          <div className="flex flex-wrap justify-between items-center  ">
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "400px", height: "60px" }}
              className="bg-gray-950 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 ml-2 mb-5 text-2xl text-green-400 placeholder-red-500 mt-12"
            />

            <div className="flex items-center lg:order-2">
              <Link
                to="/Bucket"
                className=" bg-gray-900 hover:bg-green-500 focus:ring-4 text-red-500 text-2xl focus:ring-red-800 font-80 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5   focus:outline-none mt-8"
                style={{ marginRight: 70, height: "60px", width: "150px" }}
              >
                Bucket
              </Link>
              <Link
                to="/Contact"
                className="text-white bg-gray-900 hover:bg-green-800 focus:ring-4 text-2xl focus:ring-orange-300 font-medium rounded-lg  px-4 lg:px-3 py-2 lg:py-2.5 mr-2 focus:outline-none"
                style={{
                  marginRight: 50,
                  height: "60px",
                  width: "150px",
                  marginTop: 38,
                }}
              >
                User Profile
              </Link>
            </div>
          </div>
          <div className="bg-gray-950 w-100% z-0 h-24"></div>
        </nav>
      </header>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 mt-2"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
          <div className="">
            <li class="">
              <Link to="/" className="flex items-center ">
                <img
                  src="./src/components/slogo1.png"
                  className=" z-1 hover:border-yellow-400 border-4  border-teal-50  "
                  style={{
                    width: "700px",
                    height: "150px",
                    marginLeft: 460,
                    marginTop: -230,
                    borderStartEndRadius: 20,
                    borderEndStartRadius: 20,
                  }}
                  alt="Logo"
                />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
