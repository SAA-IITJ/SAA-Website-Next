"use client";
import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideTabsExampleProps {
    handleClick: (eventType: string) => void;
}

export const SlideTabsExample: React.FC = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs handleClick={()=>{}}/>
    </div>
  );
};

const SlideTabs: React.FC<SlideTabsExampleProps> = ({handleClick}) => {
  const [position, setPosition] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      
      <Tab setPosition={setPosition} handleClick={()=>{handleClick("Alumni Interviews")}} >Alumni Interviews</Tab>
      <Tab setPosition={setPosition} handleClick={()=>{handleClick("Ask an Alumnus")}} >Ask an Alumnus</Tab>
      <Tab setPosition={setPosition} handleClick={()=>{handleClick("Flagship Events")}} >Flagship Events</Tab>
      

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
