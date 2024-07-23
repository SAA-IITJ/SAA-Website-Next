// components/NavBar.tsx
"use client";
import { useState } from "react";
import {
  NavLinks,
  DropdownLink,
  SimpleLink,
  NavLink,
} from "@/app/types/Navlinks.type";
import "../styles/nav.module.css"; // Ensure your custom styles are imported

export interface NavBarProps {
  navLinks: NavLinks;
}

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const isDropdownLink = (navLink: NavLink): navLink is DropdownLink => {
    return (navLink as DropdownLink).subLinks !== undefined;
  };

  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto py-4 bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <img
          className="w-16 cursor-pointer"
          src="/assets/saa_logo_jpeg.jpeg"
          alt="Logo"
        />
        <span className="ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white">
          Society of Alumni Affairs
        </span>
      </div>
      <div className="relative">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
          {Object.entries(navLinks).map(([key, navLink], index) => (
            <li key={key} className="relative">
              {isDropdownLink(navLink) ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="text-black bg-white dark:text-white dark:bg-gray-800 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none rounded-lg text-center inline-flex items-center"
                    type="button"
                  >
                    {navLink.text}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {openDropdown === index && (
                    <div className="absolute z-50 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg divide-y divide-gray-100 dark:divide-gray-600">
                      <ul className="py-2 text-sm text-black dark:text-white">
                        {navLink.subLinks.map(({ text, url }) => (
                          <li key={url}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={navLink.url}
                  className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded"
                >
                  {navLink.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
