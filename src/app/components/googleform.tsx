import Image from "next/image";
import Link from "next/link";
import "../styles/AlumniChanel.css";
import "../styles/AlumniChanel-ltr.css";

const AlumniChannelSection = () => {
  return (
    <div className="px-10">
      <div className="grid max-w-screen-xl mt-0 px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:px-0.5 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
            Contact Us
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-3xl dark:text-black">
            Leave any comment or contact us for any issue
          </p>
          <div className="event-link event-link-ltr">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfwtaxAersRJuBq6Pl2-sNbjC67uZgC5gl37uMUwOmLeMC44w/viewform?embedded=true" legacyBehavior>
              <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/assets/home/contactUs.jpg"
            alt="Distinguished Alumni"
            className="h-full w-full"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniChannelSection;
