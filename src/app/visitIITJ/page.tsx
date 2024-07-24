import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function VisitIITJ() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <style>
                    {`
            @keyframes circle {
              0% { clip-path: circle(10%); }
              50% { clip-path: circle(25%); }
              100% { clip-path: circle(75%); }
            }
          `}
                </style>
                <link rel="stylesheet" href="/stylesheets/visitIITJ.css" />
            </Head>

            {/* Page Content */}
            <section className="text-black body-font bg-red-100" style={{ backgroundColor: '#fee2e2 !important' }}>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-5xl tracking-tight font-semibold text-black">Visit IIT Jodhpur</h2>
                        <p className="mb-6 font-light md:text-xl text-gray-950">
                            We invite you to tour IIT Jodhpur’s impressive and picturesque campus, where you can see the foundation of our impactful endeavors.
                        </p>
                    </div>
                    <div className="box" style={{ animation: 'circle 1.5s', clipPath: 'circle(75%)' }}>
                        <Image
                            className="w-full"
                            src="/assets/home/Visitiitj.jpg"
                            alt="dashboard image"
                            width={600}
                            height={400}
                            style={{ border: 'transparent', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}
                        />
                    </div>
                </div>
            </section>

            {/* Dashak Visit Section */}
            <section className="bg-white dark:bg-white mt-0 body-font">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
                    <div className="mx-auto mb-16 max-w-screen-sm lg:mb-8">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black mt-16">Dashak Visit</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-900">
                            To visit IIT Jodhpur during Alumni Day or DASHAK 3.0, visit the Dashak section of events page
                        </p>
                        <Link href="#">
                            <span className="inline-flex justify-between items-center py-1 px-1 pr-4 mt-4 mb-4 text-sm rounded-full bg-red-400 text-black font-bold hover:underline" role="alert" style={{ backgroundColor: '#fee2e2 !important' }}>
                                <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3"></span>
                                <span className="text-sm font-medium">Get Started</span>
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0L12 12.414l3.293 3.293a1 1 0 001.414-1.414L13.414 12l3.293-3.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L10.586 12 7.293 15.293a1 1 0 000 1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Normal Visit Section with Animation */}
                    <div className="delay-[100ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
                        <div className="duration-[500ms] [animation-iteration-count:infinite] taos:opacity-0">
                            <div className="mx-auto mt-24 mb-8 max-w-screen-sm lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Normal Visit</h2>
                                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-900">Contact Us</p>
                            </div>
                            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div className="text-center text-gray-500 dark:text-black">
                                </div>
                                <div className="text-center text-black dark:text-black">
                                    <Image
                                        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                                        src="/assets/team/tharak_team.jpg"
                                        alt="Tarakadatta Hegde"
                                        width={144}
                                        height={144}
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                                        <a href="#">Tharakadatta Hegde</a>
                                    </h3>
                                    <p>Vice President</p>
                                    <p>Contact: +91 87927 60150</p>
                                    <ul className="flex justify-center mt-4 mb-16 space-x-4">
                                        <li>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                <svg className="w-6 h-6 text-gray-800 dark:text-black dark:hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                <svg className="w-6 h-6 text-gray-800 dark:text-black dark:hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16 5.5A1.5 1.5 0 0 1 14.5 4h-11A1.5 1.5 0 0 1 2 5.5v13A1.5 1.5 0 0 1 3.5 20h11A1.5 1.5 0 0 1 16 18.5v-13ZM6.5 5h11v2h-11V5Zm0 3h11v10h-11V8Zm5.5 7a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0-3a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center text-black dark:text-black">
                                    <Image
                                        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                                        src="/assets/team/yuvraj_team.jpg"
                                        alt="Tharakadatta Hegde"
                                        width={144}
                                        height={144}
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                                        <a href="#">Yuvraj Saran</a>
                                    </h3>
                                    <p>Overall Coordinator</p>
                                    <p>Contact: +91 83026 68675</p>
                                    <ul className="flex justify-center mt-4 mb-16 space-x-4">
                                        <li>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                <svg className="w-6 h-6 text-gray-800 dark:text-black dark:hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                <svg className="w-6 h-6 text-gray-800 dark:text-black dark:hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16 5.5A1.5 1.5 0 0 1 14.5 4h-11A1.5 1.5 0 0 1 2 5.5v13A1.5 1.5 0 0 1 3.5 20h11A1.5 1.5 0 0 1 16 18.5v-13ZM6.5 5h11v2h-11V5Zm0 3h11v10h-11V8Zm5.5 7a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0-3a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center text-gray-500 dark:text-black">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
