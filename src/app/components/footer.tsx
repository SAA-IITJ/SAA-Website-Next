import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                className="h-12 me-3"
                src="/assets/saa_logo_jpeg.jpeg"
                alt="Society of Alumni Affairs Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                Society of Alumni Affairs
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-black">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="/home" className="hover:underline">SAA</a>
                </li>
                <li className="mb-4">
                  <a href="/facultyAdvisor" className="hover:underline">Faculty Advisor</a>
                </li>
                <li className="mb-4">
                  <a href="/team" className="hover:underline">Student Team</a>
                </li>
                <li className="mb-4">
                  <a href="/events" className="hover:underline">Events</a>
                </li>
                <li className="mb-4">
                  <a href="/flagshipEvents" className="hover:underline">Flagship Events</a>
                </li>
              </ul>
            </div>
            <div style={{ paddingTop: '40px' }}>
              <ul className="text-gray-500 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="/dashak" className="hover:underline">Dashak</a>
                </li>
                <li className="mb-4">
                  <a href="/visitIITJ" className="hover:underline">Visit IITJ</a>
                </li>
                <li className="mb-4">
                  <a href="/givingBack" className="hover:underline">Giving Back</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.iitj.ac.in/" className="hover:underline">IIT Jodhpur</a>
                </li>
                <li className="mb-4">
                  <a href="https://alumni.iitj.ac.in/" className="hover:underline">Alumni Portal</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-black">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-black">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-black">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">SAA</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/company/society-of-alumni-affairs-iit-jodhpur/mycompany/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Z"/>
              </svg>
              <span className="sr-only">Github page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
