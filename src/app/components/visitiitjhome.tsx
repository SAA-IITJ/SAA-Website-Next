// pages/VisitIITJ.js

import Head from 'next/head';

export default function VisitIITJHome() {
  return (
    <>
      <Head>
        <title>Visit IIT Jodhpur</title>
        <style>{`
          .event-link {
            padding: 1px 0px;
            margin: 0px 1px;
            display: inline-block;
            position: relative;
          }

          .event-link::before {
            transition: width 300ms;
            height: 5px;
            content: "";
            position: absolute;
            background-color: black;
            left: 10%; 
            right: 30%; 
            width: 0; 
            bottom: 20px;
          }

          .event-link-ltr::before {
            width: 0%;
            bottom: 5px;
          }

          .event-link-ltr:hover::before {
            width: 60%;
          }

          .delay-300ms {
            transition-delay: 300ms;
          }

          .duration-600ms {
            transition-duration: 600ms;
          }

          .taos-translate-y-200px {
            transform: translateY(200px);
          }

          .taos-opacity-0 {
            opacity: 0;
          }
        `}</style>
      </Head>

      <div className="delay-300ms duration-600ms taos-translate-y-200px taos-opacity-0" data-taos-offset="300">
        <div className="duration-1000ms animation-iteration-count-infinite taos-opacity-0">
          <section className="bg-white dark:bg-white">
            <div className="grid max-w-screen-xl py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:px-0.1 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
                  Visit IIT Jodhpur
                </h1>
                <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
                  Explore the vibrant campus life of IIT Jodhpur and reconnect, on any day or during the alumni day or DASHAK 3.0.
                </p>
                <div className="event-link event-link-ltr">
                  <a
                    href="/visitIITJ.html"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="h-full w-full" src="/assets/home/visitCampus.jpg" alt="Visit Campus" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
