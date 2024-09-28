"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="container mx-auto px-[15px]">
      <div className="flex justify-between items-center py-[15px]">
        <a href="#" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Hyperhire Logo"
            className="h-full w-auto"
          />
        </a>
        <div className="hidden sm:flex gap-[20px]">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-base text-white font-black flex items-center"
            >
              메뉴
              <span
                className={`ml-1 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-[240px] mt-2 bg-white shadow-md rounded ">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-medium text-sm font-medium	text-textColor">
                    채용
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-medium text-sm font-medium text-textColor">
                    해외 개발자 원격 채용
                  </li>
                  <li className="border-t-[1px] border-[#F2F4F7] px-4 py-2 hover:bg-gray-200 cursor-pointer font-medium text-sm font-medium text-textColor">
                    외국인 원격 채용 (비개발 직군)
                  </li>
                </ul>
              </div>
            )}
          </div>
          <h2 className="text-base text-white font-black ">
            해외 개발자 활용 서비스
          </h2>
        </div>
        <button className="sm:block hidden bg-white text-base text-lightBlue font-black	 py-1.5 px-5 rounded">
          문의하기
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
