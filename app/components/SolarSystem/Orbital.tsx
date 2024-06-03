"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Orbital = ({
  planet,
}: {
  planet: {
    image: any;
    zindex: number;
    size: number;
    link: string;
    sectionColor: string;
  };
}) => {
  return (
    <Link
      href={planet.link}
      className={`h-${planet.size}rem w-${planet.size}rem rounded-full flex justify-center items-center absolute`}
      style={{
        height: `${planet.size}rem`,
        width: `${planet.size}rem`,
      }}
    >
      <motion.div
        className={`h-${planet.size}rem w-${planet.size}rem rounded-full border border-slate-800 z-${planet.zindex} flex justify-center items-center absolute`}
        style={{
          height: `${planet.size}rem`,
          width: `${planet.size}rem`,
        }}
        whileHover={{ borderColor: planet.sectionColor, scale: 1.08 }}
        animate={{
          rotate: "360deg",
          transition: {
            duration: planet.size,
            repeat: Infinity,
            repeatDelay: 0,
          },
        }}
      >
        <div>
          <Image
            src={planet.image}
            alt="planet"
            className="absolute right-7 translate-x-10"
            height={20}
            width={20}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default Orbital;
