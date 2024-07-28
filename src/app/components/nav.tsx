"use client";
import { useState, useEffect } from "react";
import {
  NavLinks,
  DropdownLink,
  SimpleLink,
  NavLink,
} from "@/app/types/Navlinks.type";
import styles from "../styles/nav.module.css"; // Ensure your custom styles are imported

export interface NavBarProps {
  navLinks: NavLinks;
}

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const isDropdownLink = (navLink: NavLink): navLink is DropdownLink => {
    return (navLink as DropdownLink).subLinks !== undefined;
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-white nav-container pt-6 pb-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/home" className="text-black">
                <div className="flex items-center">
                  <img
                    className="w-16"
                    src="/assets/saa_logo_jpeg.jpeg"
                    alt="Logo"
                  />
                  <span className={`ml-3 text-3xl font-semibold whitespace-nowrap dark:text-white ${styles.title}`}>
                    Society of Alumni Affairs
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-2 flex items-center space-x-6 nav-links">
              {Object.entries(navLinks).map(([key, navLink], index) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDropdownLink(navLink) ? (
                    <>
                      <button
                        className="text-black hover:bg-white font-base hover:text-black rounded-lg p-2 flex items-center"
                      >
                        {navLink.text}
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
                      {openDropdown === index && (
                        <div className="absolute left-0 mt-2 w-48 bg-white font-base rounded-md shadow-lg py-2 z-10">
                          {navLink.subLinks.map((subLink) => (
                            <a
                              key={subLink.url}
                              href={subLink.url}
                              className="block px-4 py-2 text-black font-base hover:bg-gray-200"
                            >
                              {subLink.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={navLink.url}
                      className={`text-black font-base rounded-lg p-2 ${styles['anim-link']} ${styles['anim-link-ltr']}`}
                    >
                      {navLink.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md font-base text-black hover:text-black focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
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
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Object.entries(navLinks).map(([key, navLink], index) => (
              <div key={key}>
                {isDropdownLink(navLink) ? (
                  <>
                    <button
                      className="text-black flex hover:bg-white font-base hover:text-black rounded-lg p-2 w-full text-left items-center"
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      {navLink.text}
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
                    {openDropdown === index && (
                      <div className="pl-4">
                        {navLink.subLinks.map((subLink) => (
                          <a
                            key={subLink.url}
                            href={subLink.url}
                            className="text-black block hover:bg-white font-base hover:text-black rounded-lg p-2"
                          >
                            {subLink.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={navLink.url}
                    className="text-black block hover:bg-white font-base hover:text-black rounded-lg p-2"
                  >
                    {navLink.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
