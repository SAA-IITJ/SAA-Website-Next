"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealLinks from "./Links";


interface SquareData {
  id: number;
  src: string;
}

const squareData: SquareData[] = [
  {
    id: 1,
    src: "/assets/events/p1.jpg",
  },
  {
    id: 2,
    src: "/assets/events/p2.jpg",
  },
  {
    id: 3,
    src: "/assets/events/p3.jpg",
  },
  {
    id: 4,
    src: "/assets/events/p50.jpg",
  },
  {
    id: 5,
    src: "/assets/events/p5.jpg",
  },
  {
    id: 6,
    src: "/assets/events/p6.jpg",
  },
  {
    id: 7,
    src: "/assets/events/p7.jpg",
  },
  {
    id: 8,
    src: "/assets/events/p8.jpg",
  },
  {
    id: 9,
    src: "/assets/events/p9.jpg",
  },
  {
    id: 10,
    src: "/assets/events/p10.jpg",
  },
  {
    id: 11,
    src: "/assets/events/p51.jpg",
  },
  {
    id: 12,
    src: "/assets/events/p12.jpg",
  },
  {
    id: 13,
    src: "/assets/events/p13.jpg",
  },
  {
    id: 14,
    src: "/assets/events/p14.jpg",
  },
  {
    id: 15,
    src: "/assets/events/p15.jpg",
  },
  {
    id: 16,
    src: "/assets/events/p16.jpg",
  },
];

const shuffle = (array: SquareData[]): SquareData[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<JSX.Element[]>(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      {/* <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Events
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div> */}
      <RevealLinks/>
      <ShuffleGrid />
    </section>
  );
};

export default ShuffleHero;
