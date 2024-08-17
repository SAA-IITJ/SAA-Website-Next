import Image from 'next/image';

const AlumniDaySection = () => {
  return (
    <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 pt-16" data-taos-offset="300">
      <div className="duration-[1000ms] [animation-iteration-count:infinite] taos:opacity-0">
        <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <section
            className="zoom mt-8 mb-4 bg-white dark:bg-white"
            style={{
              background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              className="glass-effect"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '20px'
              }}
            ></div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
                  Alumni Day and Dashak 3.0
                </h1>
                <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
                Dashak, the prestigious 10-yearly alumni meetup for IIT Jodhpur! Dashak is more than just a reunion; it&apos;s a celebration of the enduring bonds, shared memories, and remarkable journeys of the IIT Jodhpur community.
                </p>
                <div className="event-link event-link-ltr">
                  <a
                    href="/events.html"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
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
                  </a>
                </div>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image
                  src="/assets/home/dashakArt.jpg"
                  alt="Events Image"
                  width={500}
                  height={500}
                  className="h-full w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlumniDaySection;
