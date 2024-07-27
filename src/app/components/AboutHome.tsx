import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    
    <>
      {/* About Section */}
      <section className="bg-white text-black pt-32 pb-2 px-5">
        <div className="container mx-auto text-center px-2 sm:px-4 lg:px-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-gray-500"></div>
            <h2 className="text-black text-2xl font-bold mx-4">ABOUT</h2>
            <div className="w-16 h-0.5 bg-gray-500"></div>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold mb-8">
            Society of Alumni Affairs
          </h3>
          <p className="text-lg lg:text-xl mb-4">
            The SAA community enhances the institute and students' growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus, the society fosters strong connections and facilitates continuous improvement and development.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="overflow-hidden pt-6 pb-32 lg:pt-[40px] lg:pb-[90px] bg-white border-[#6b502d] px-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/home/carousel_studentgrpPhoto.jpg"
                      alt="Student Group Photo"
                      width={800}
                      height={600}
                      className="h-auto max-w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/home/carousel_teamwork.jpg"
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
                      src="/assets/home/carousel_studentgrp.png"
                      alt="Student Group"
                      width={800}
                      height={600}
                      className="h-auto max-w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      {/* SVG icon or additional content can be placed here */}
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
