"use client";
import React, { useState } from "react";

export default function Home() {
  const [isClick, setisClick] = useState(false);
  const [isTeamClick, setIsTeamClick] = useState(false);
  const [isQAClick, setIsQAClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  const toggleTeamMenu = (): void => {
    setIsTeamClick(!isTeamClick);
  };

  const toggleQAMenu = (): void => {
    setIsQAClick(!isQAClick);
  };

  return (
    <>
      <nav className="bg-black nav-container">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/home" className="text-white">
                  <div className="flex items-center">
                    <img
                      className="w-16"
                      src="assets/home/transparent_logo_hd.png"
                      alt=""
                    />
                    <span className="ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Society of Alumni Affairs
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-2 flex items-center space-x-6 nav-links">
                <a
                  href="/home"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <div className="relative group">
                  <button className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex items-center">
                    Team
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="/team/leader"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Faculty Advisor
                    </a>
                    <a
                      href="/team/members"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Student Team
                    </a>
                  </div>
                </div>
                <a
                  href="/activities"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Activities
                </a>
                <a
                  href="/visitIITJ"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Visit IITJ
                </a>
                <div className="relative group">
                  <button className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex items-center">
                    Quick Access
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="https://www.iitj.ac.in/"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      IIT Jodhpur
                    </a>
                    <a
                      href="https://alumni.iitj.ac.in/"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Alumni Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/home"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <div>
                <button
                  className="text-white flex hover:bg-white hover:text-black rounded-lg p-2 w-full text-left items-center"
                  onClick={toggleTeamMenu}
                >
                  Team
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isTeamClick && (
                  <div className="pl-4">
                    <a
                      href="/team/leader"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Faculty Member
                    </a>
                    <a
                      href="/team/members"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Student Team
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/activities"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Activities
              </a>
              <a
                href="/visitIITJ"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Visit IITJ
              </a>
              <div>
                <button
                  className="text-white flex hover:bg-white hover:text-black rounded-lg p-2 w-full text-left items-center"
                  onClick={toggleQAMenu}
                >
                  Quick Access
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isQAClick && (
                  <div className="pl-4">
                    <a
                      href="https://www.iitj.ac.in/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      IIT Jodhpur
                    </a>
                    <a
                      href="https://alumni.iitj.ac.in/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Alumni Portal
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
