"use client";
import React from "react";
import Orbital from "./Orbital";
import { planets } from "./planets";
import sun from "../../assets/images/sun.png";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const SolarSystem = () => {
  return (
    <motion.div
      className="w-screen h-screen flex justify-center items-center relative"
      initial={{ opacity: 0, scale: 10 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 10 }}
      transition={{ duration: 3, ease: easeInOut }}
    >
      <Orbital planet={planets.neptune} />
      <Orbital planet={planets.uranus} />
      <Orbital planet={planets.saturn} />
      <Orbital planet={planets.jupiter} />
      <Orbital planet={planets.mars} />
      <Orbital planet={planets.earth} />
      <Orbital planet={planets.venus} />
      <Orbital planet={planets.mercury} />
      <Image src={sun} alt="sun image" height={50} width={50} />
    </motion.div>
  );
};

export default SolarSystem;
