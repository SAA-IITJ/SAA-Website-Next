import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FlipLinkProps {
  children: ReactNode;
  href: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {React.Children.map(children, (child, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {child}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {React.Children.map(children, (child, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {child}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const RevealLinks: React.FC = () => {
  return (
    <section className="grid place-content-center gap-2 bg-white ml-0 py-24 text-black">
      {/* <FlipLink href="#">Events</FlipLink> */}
      <p className="h-6"> </p>
      <FlipLink href="#">Events</FlipLink>
      {/* <FlipLink href="#">Convocation</FlipLink>
      <FlipLink href="#">Farewell</FlipLink> */}
    </section>
  );
};

export default RevealLinks;
