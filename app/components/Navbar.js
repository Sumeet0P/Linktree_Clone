"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);

  return (
    <>
      {showNavbar && (
        <nav className=" bg-white w-[90vw] flex justify-between fixed top-12 right-[5vw] rounded-full p-4 ">
          <div className="logo gap-4 items-center flex">
            <Image
              loading="eager"
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="Logo"
              width={140}
              height={32}
              className="nav-desktop-logo h-6 mx-5"
            ></Image>

            <ul className="flex gap-8 font-semibold">
              <li>Products</li>
              <li>Templates</li>
              <li>Marketplace</li>
              <li>Learn</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="font-semibold flex gap-2">
            <button className="login p-4 px-7 rounded-lg border-2 border-transparent hover:border-gray-200 bg-gray-100 cursor-pointer">
              Log in
            </button>
            <button className="signup p-4 px-7 text-white rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
              Sign up Free
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
