import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="bg-white text-black pt-32 pb-2 px-5">
        <div className="container block-container mx-auto text-center px-2 sm:px-4 lg:px-10">
          <div className="mb-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-0.5 bg-gray-500"></div>
              <h2 className="text-black text-2xl font-bold mx-4">ABOUT</h2>
              <div className="w-16 h-0.5 bg-gray-500"></div>
            </div>
            <div className="block">
              <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                Society of Alumni Affairs
              </h3>
            </div>
            <p className="text-lg lg:text-xl mb-4">
              The SAA community enhances the institute and students' growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus, the society fosters strong connections and facilitates continuous improvement and development.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="overflow-hidden pt-6 pb-32 lg:pt-[40px] lg:pb-[90px] bg-white border-[#6b502d] px-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12 inline-flex">
              <div className="flex items-center -mx-3 sm:-mx-4 ">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/home/about_1.jpg"
                      alt="Student Group Photo"
                      width={800}
                      height={600}
                      className="h-auto max-w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/home/about_2.jpg"
                      alt="Teamwork"
                      width={800}
                      height={600}
                      className="h-auto max-w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2 mt-4 sm:mt-0">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/assets/home/about_3.jpg"
                      alt="Student Group"
                      width={800}
                      height={600}
                      className="h-auto max-w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                               width="134"
                               height="106"
                               viewBox="0 0 134 106"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                               >
                               <circle
                               cx="1.66667"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 1.66667 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 16.3333 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 31 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 45.6667 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3334"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 60.3334 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 88.6667 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 117.667 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 74.6667 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 103 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="104"
                               r="1.66667"
                               transform="rotate(-90 132 104)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="89.3333"
                               r="1.66667"
                               transform="rotate(-90 1.66667 89.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="89.3333"
                               r="1.66667"
                               transform="rotate(-90 16.3333 89.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="89.3333"
                               r="1.66667"
                               transform="rotate(-90 31 89.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="89.3333"
                               r="1.66667"
                               transform="rotate(-90 45.6667 89.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 60.3333 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 88.6667 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 117.667 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 74.6667 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 103 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="89.3338"
                               r="1.66667"
                               transform="rotate(-90 132 89.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="74.6673"
                               r="1.66667"
                               transform="rotate(-90 1.66667 74.6673)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="31.0003"
                               r="1.66667"
                               transform="rotate(-90 1.66667 31.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 16.3333 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="31.0003"
                               r="1.66667"
                               transform="rotate(-90 16.3333 31.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 31 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="31.0003"
                               r="1.66667"
                               transform="rotate(-90 31 31.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 45.6667 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="31.0003"
                               r="1.66667"
                               transform="rotate(-90 45.6667 31.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 60.3333 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 60.3333 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 88.6667 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 88.6667 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 117.667 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 117.667 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 74.6667 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 74.6667 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 103 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 103 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="74.6668"
                               r="1.66667"
                               transform="rotate(-90 132 74.6668)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="30.9998"
                               r="1.66667"
                               transform="rotate(-90 132 30.9998)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 1.66667 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 1.66667 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 16.3333 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 16.3333 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 31 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 31 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 45.6667 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 45.6667 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 60.3333 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 60.3333 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 88.6667 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 88.6667 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 117.667 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 117.667 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 74.6667 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 74.6667 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 103 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 103 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="60.0003"
                               r="1.66667"
                               transform="rotate(-90 132 60.0003)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="16.3333"
                               r="1.66667"
                               transform="rotate(-90 132 16.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="45.3333"
                               r="1.66667"
                               transform="rotate(-90 1.66667 45.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="1.66667"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 1.66667 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="45.3333"
                               r="1.66667"
                               transform="rotate(-90 16.3333 45.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="16.3333"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 16.3333 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="45.3333"
                               r="1.66667"
                               transform="rotate(-90 31 45.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="31"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 31 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="45.3333"
                               r="1.66667"
                               transform="rotate(-90 45.6667 45.3333)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="45.6667"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 45.6667 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 60.3333 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="60.3333"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 60.3333 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 88.6667 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="88.6667"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 88.6667 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 117.667 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="117.667"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 117.667 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 74.6667 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="74.6667"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 74.6667 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 103 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="103"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 103 1.66683)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="45.3338"
                               r="1.66667"
                               transform="rotate(-90 132 45.3338)"
                               fill="#3056D3"
                               />
                               <circle
                               cx="132"
                               cy="1.66683"
                               r="1.66667"
                               transform="rotate(-90 132 1.66683)"
                               fill="#3056D3"
                               />
                    </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mt-6 lg:mt-4">
              <div className="mt-4 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  SAA's Diverse Verticals: Driving Success and Alumni Connections
                </h2>
                <p className="mb-5 text-lg text-body-color dark:text-dark-6">
                  The society has various verticals, including Content, Design, Tech, Media, AMP (Alumni Mentorship Programme), and Events. Each vertical plays a vital role in the overall functioning and success of the society, with a commitment to maintaining high standards and continuously improving efforts.
                </p>
                <p className="mb-8 text-lg text-body-color dark:text-dark-6">
                  SAA's various verticals ensure the smooth operation and success of its events, fostering connections and camaraderie among its alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
