import React from 'react';
import Image from "next/image";
const LogoSpace: React.FC = () => {
  return (
    <div className=" bg-white flex justify-center" >
      {/* You can add content here if needed */}
      <div data-aos="fade-up"
     data-aos-duration="2000">
      <img className='h-96 w-96' src = "/assets/home/logo_hd.png" alt="SAA IITJ Logo"/>
      </div>
      
      
    </div>
  );
};

export default LogoSpace;