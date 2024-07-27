'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AlumniMemoir = () => {
  return (
    <div>
        <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
        <div className="duration-[1000ms] [animation-iteration-count:infinite] taos:opacity-0">
          <section className="mt-8 bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-1">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">Alumni Memoirs</h1>
              <p className="mb-8 text-4xl font-normal text-black lg:text-xl sm:px-28 xl:px-128">
                Everybody has a story. And there's something to be learnt from every experience.
              </p>
              <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-[#f1eedc]" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-[#f1eedc] border-b border-[#6b502d] rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-950 lg:mb-8">
                    <h3 className="text-lg font-semibold text-black">Prioritize continuous upskilling</h3>
                    <p className="my-4">"The technological landscape evolves rapidly, making it crucial for professionals in tech, business, or marketing to stay updated with the latest tools and trends"</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/rishabh-rs-shukla/">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src="/assets/home/memoir_rishabh.jpeg"
                        alt="Rishabh Shukla"
                        width={48}
                        height={48}
                      />
                    </Link>
                    <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                      <div>Rishabh Shukla</div>
                      <div className="text-sm text-gray-950">Product Manager at Paytm</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-[#f1eedc] border-b border-[#6b502d] md:rounded-se-lg">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-950 lg:mb-8">
                    <h3 className="text-lg font-semibold text-black">Don't try to get too far ahead of yourself</h3>
                    <p className="my-4">"If you consider the process as an investment towards the end goal, then you're creating far worse opportunity cost for yourself. So, for all the selfish reasons, start enjoying the process."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/jainprabhash/">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src="/assets/home/memoir_prabhas.jpeg"
                        alt="Prabhash Jain"
                        width={48}
                        height={48}
                      />
                    </Link>
                    <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                      <div>Prabhash Jain</div>
                      <div className="text-sm text-gray-950">Associate Software Engineer, Microsoft</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-[#f1eedc] border-b border-[#6b502d] md:rounded-es-lg md:border-b-0 md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-950 lg:mb-8">
                    <h3 className="text-lg font-semibold text-black">Benefit from the experiences of your seniors</h3>
                    <p className="my-4">"Without doing something wrong, you will never know that you are doing anything wrong, and without talking, you will never realize that you are. So talk to your seniors, reach out to your alumni, learn to benefit from their experiences."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/imujjwalanand/">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src="/assets/home/memoir_ujjwal.jpeg"
                        alt="Ujjwal Anand"
                        width={48}
                        height={48}
                      />
                    </Link>
                    <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                      <div>Ujjwal Anand</div>
                      <div className="text-sm text-gray-950">Senior Software Engineer, Razorpay</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-[#f1eedc] border-[#6b502d] rounded-b-lg md:rounded-se-lg">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-950 lg:mb-8">
                    <h3 className="text-lg font-semibold text-black">Avoid Deadline pressure</h3>
                    <p className="my-4">"My aversion to deadline pressure, the prospect of a chill life coupled with continuous learning fueled my passion for research, shaped my career trajectory."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/kratisaxena/">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src="/assets/home/memoir_krati.jpeg"
                        alt="Krati Saxena"
                        width={48}
                        height={48}
                      />
                    </Link>
                    <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                      <div>Krati Saxena</div>
                      <div className="text-sm text-gray-950">Senior Software Engineer, Alien Technology Transfer</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AlumniMemoir