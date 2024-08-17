"use client";

import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AlumniMemoir from "../components/alumniMemoir";
import DashakHome from "../components/DashakHome";
import ImageGallery from '../components/ImageGallery';
import VisitIITJHome from "../components/visitiitjhome";
import AlumniChannel from "../components/AlumniChannel";
import ContactUs from "../components/ContactUsHome";
import About from "../components/AboutHome";
import LogoSpace from "../components/logospace";
import AlumniChannelSection from "../components/googleform";
// import ImageGallery from "../components/ImageGallery";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "image": "https://media.licdn.com/dms/image/v2/C4D0BAQEeAR8xrKduig/company-logo_200_200/company-logo_200_200/0/1658770937578?e=2147483647&v=beta&t=_a8wQxMAOETqjMDdczTjox1gdOfpWd0baN0k8T9Q0j4",
              "url": "https://www.saa.iitj.ac.in",
              "logo": "https://media.licdn.com/dms/image/v2/C4D0BAQEeAR8xrKduig/company-logo_200_200/company-logo_200_200/0/1658770937578?e=2147483647&v=beta&t=_a8wQxMAOETqjMDdczTjox1gdOfpWd0baN0k8T9Q0j4",
              "name": "SAA IITJ",
              "description": "Society of Alumni Affairs IIT Jodhpur",
              "email": "saa@iitj.ac.in",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Indian Institute of Technology Jodhpur",
                "addressLocality": "Karwar",
                "addressCountry": "IN",
                "addressRegion": "Rajasthan",
                "postalCode": "342037"
              },
            }),
          }}
        />
      </Head>
      <LogoSpace />
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <AlumniMemoir />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <AlumniChannel />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <DashakHome />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <VisitIITJHome />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <AlumniChannelSection />
      </div>


    </>
  );
}

export default AboutSection;
