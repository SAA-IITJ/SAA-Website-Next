'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AlumniMemoir from "../components/alumniMemoir";
import DashakHome from "../components/DashakHome";
import VisitIITJHome from "../components/visitiitjhome";
import AlumniChannel from "../components/AlumniChannel";
import ContactUs from "../components/ContactUsHome";
import About from "../components/AboutHome";
import LogoSpace from "../components/logospace";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css"


function AboutSection() {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <>
      
      <LogoSpace />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
      <AlumniMemoir />
      </div>
      <div data-aos="fade-up">
      <AlumniChannel />
      </div>
      <div data-aos="fade-up">
      <DashakHome />
      </div>
      <div data-aos="fade-up">
      <VisitIITJHome />
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
      <ContactUs />
     </div>
      
      
      
      
      
    </>
  );
}

export default AboutSection;
