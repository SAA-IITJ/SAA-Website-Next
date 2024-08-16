// components/AlumniChannelSection.js

import Image from "next/image";
import Link from "next/link";
import "../styles/AlumniChanel.css";
import "../styles/AlumniChanel-ltr.css";
const AlumniChannelSection = () => {
  return (
    <div className="px-10">
      <div className="grid max-w-screen-xl mt-12 px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:px-0.5 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-black">
            Announcement Channel
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
            A dedicated platform for our esteemed alumni to connect with all the
            students. Join us in fostering a strong, supportive community that
            bridges the gap between students and alumni.
          </p>
          <div className="event-link event-link-ltr">
            <Link
              href="https://chat.whatsapp.com/FF5DBkQXXOEDeVmoBqNtJD "
              legacyBehavior
            >
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
                <svg
                  className="w-5 h-5 ml-6 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/assets/home/channelArt.jpg"
            alt="Distinguished Alumni"
            className="h-full w-full"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div id="companies-title" className="flex justify-center gap-2">
        <img
          className="translate-y-2"
          src="/assets/left_DownArrow.svg"
          alt=""
        />
        <span className="font-extrabold">OUR ESTEEMED ALUMNI</span>
        <img
          className="-scale-x-100 translate-y-2"
          src="/assets/right_DownArrow.svg"
          alt=""
        />
      </div>
      <div className="wrapper-rtl">
        <div className="item-rtl item-rtl1">
          <div className="image-holder ">
            <a href="https://www.instagram.com/techhacksbyn.nirmal/">
              <img className="image" src="assets/home/marquee_nirmal.jpeg" alt="Nirmal Kumawat"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Nirmal Kumawat</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Computer Scientist-II Adobe
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl2">
          <div className="image-holder ">
            <a href="https://www.instagram.com/lalchandbisu/">
              <img className="image" src="assets/home/marquee_lalchand.jpeg" alt="Lal Chand Bisu"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Lal Chand Bisu</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Co-Founder & CEO at Kuku FM
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl3">
          <div className="image-holder ">
            <a href="https://www.instagram.com/_vinod92/">
              <img className="image" src="assets/home/marquee_vinod.jpeg" alt="Vinod Kumar Meena" />
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Vinod Kumar Meena</a>
            </h3>
            <span className="text-gray-950 text-xs">Co-Founder at Kuku FM</span>
          </div>
        </div>

        <div className="item-rtl item-rtl4">
          <div className="image-holder ">
            <a href="https://www.instagram.com/_vikasgoyal/">
              <img className="image" src="assets/home/marquee_vikas.jpeg" alt="Vikas Goyal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Vikas Goyal</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Co-founder, CTO-Kuku FM
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl5">
          <div className="image-holder ">
            <a href="https://www.linkedin.com/in/tapishr?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjFBrZYcFR3%2BJ8fZ8isjksA%3D%3D">
              <img className="image" src="assets/home/marquee_tapish.jpeg" alt="Tapish Rathore"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Tapish Rathore</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Co-founder & CTO @ Vibinex
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl6">
          <div className="image-holder ">
            <a href="https://www.linkedin.com/in/hustler-utkarsh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdzCE2Yl3QpWbWfKxhSft8w%3D%3D">
              <img className="image" src="assets/home/marquee_utkarsh.jpeg" alt="Utkarsh Trivedi"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Utkarsh Trivedi</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Co-Founder @Verifast AI
            </span>
          </div>
        </div>

        <div className="item-rtl item-rtl7">
          <div className="image-holder ">
            <a href="https://www.instagram.com/sethi.tanmay/">
              <img className="image" src="assets/home/marquee_tanmay.jpeg" alt="Tanmay Sethi" />
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Tanmay sethi</a>
            </h3>
            <span className="text-gray-950 text-xs">Co-Founder @Verifast</span>
          </div>
        </div>

        <div className="item-rtl item-rtl9">
          <div className="image-holder ">
            <a href="https://www.linkedin.com/in/himanshujaiswal1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BV8T7zjq7Se6NWWj12grYpA%3D%3D">
              <img className="image" src="assets/home/marquee_himanshu.jpeg" alt="Himanshu Jaiswal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Himanshu Jaiswal</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Senior Product Manager @ Visa Inc
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper-ltr">
        <div className="item-ltr item-ltr1">
          <div className="image-holder ">
            <a href="linkedin.com/in/gsmanu007">
              <img className="image" src="assets/home/marquee_gurjot.jpeg" alt="Gurjot Singh"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Gurjot Singh </a>
            </h3>
            <span className="text-gray-950 text-xs">
              VP, Quant at Deutsche Bank
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr2">
          <div className="image-holder ">
            <a href="linkedin.com/in/sinisterlight">
              <img className="image" src="assets/home/marquee_shobhit.jpeg" alt="Shobit Srivastava"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Shobhit Srivastava</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Co-Founder at Shovel Company
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr3">
          <div className="image-holder ">
            <a href="linkedin.com/in/darshan-joshi-5947033b">
              <img className="image" src="assets/home/marquee_darshan.jpeg" alt="Darshan Joshi"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Darshan Joshi</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Partner at McKinsey & Company
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr4">
          <div className="image-holder ">
            <a href="linkedin.com/in/surajn-ai">
              <img className="image" src="assets/home/marquee_suraj.jpeg" alt="Suraj Nadipelly"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Suraj Nadipelly</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Partner at AlphaAdvisors
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr5">
          <div className="image-holder ">
            <a href="linkedin.com/in/siddarthjn">
              <img className="image" src="assets/home/marquee_siddharth.jpeg" alt="Siddharth Jain"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Siddharth Jain</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Summer associate @ McKinsey
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr6">
          <div className="image-holder ">
            <a href="linkedin.com/in/manu-agarwal-21b2964b">
              <img className="image" src="assets/home/marquee_manu.jpeg" alt="Manu Agrawal"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Manu Agrawal</a>
            </h3>
            <span className="text-gray-950 text-xs">
              Software Engineer @Google
            </span>
          </div>
        </div>

        <div className="item-ltr item-ltr7">
          <div className="image-holder ">
            <a href="linkedin.com/in/shivamverma1006">
              <img className="image" src="assets/home/marquee_shivam.jpeg" alt="Shivan Verma"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Shivam Verma</a>
            </h3>
            <span className="text-gray-950 text-xs">Co-founder & CTO @ Chat360</span>
          </div>
        </div>

        <div className="item-ltr item-ltr9">
          <div className="image-holder ">
            <a href="linkedin.com/in/aditya-ranjan-77305571">
              <img className="image" src="assets/home/marquee_aditya.jpeg" alt="Aditya Ranjan"/>
            </a>
          </div>
          <div className="Text">
            <h3 className="text-xl font-bold tracking-tight text-black">
              <a href="#">Aditya Ranjan</a>
            </h3>
            <span className="text-gray-950 text-xs">
            Lead - Customer ExperienceLead - Customer Experience @ IDfy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniChannelSection;
