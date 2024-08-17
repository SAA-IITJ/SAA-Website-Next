"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AlumniMemoir from "./components/alumniMemoir";
import DashakHome from "./components/DashakHome";
import ImageGallery from './components/ImageGallery';
import VisitIITJHome from "./components/visitiitjhome";
import AlumniChannel from "./components/AlumniChannel";
import ContactUs from "./components/ContactUsHome";
import About from "./components/AboutHome";
import LogoSpace from "./components/logospace";
import AlumniChannelSection from "./components/googleform";
// import ImageGallery from "../components/ImageGallery";
import Gallery from "./components/ImageGallery";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
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
