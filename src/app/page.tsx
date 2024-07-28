"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };
  const [isClick, setisClick] = useState(false);
  const [isTeamClick, setIsTeamClick] = useState(false);
  const [isQAClick, setIsQAClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  const toggleTeamMenu = (): void => {
    setIsTeamClick(!isTeamClick);
  };

  const toggleQAMenu = (): void => {
    setIsQAClick(!isQAClick);
  };

  return (
    <>
      Hello
      
    </>
  );
}
