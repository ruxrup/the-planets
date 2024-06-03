"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionButton from "./SectionButton";
import Section from "./Section";
import { animate, easeInOut, motion } from "framer-motion";

export interface planetdata {
  name: string;
  overview: { content: string; source: string; image: HTMLImageElement };
  structure: { content: string; source: string; image: HTMLImageElement };
  geology: {
    content: string;
    source: string;
    image: HTMLImageElement;
    geo: HTMLImageElement;
  };
  sectionColor: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

type displayInfoType = keyof planetdata;

const PlanetLayout = ({ planetdata }: { planetdata: planetdata }) => {
  const [displayInfo, setDisplayInfo] = useState<displayInfoType>("overview");

  const content = () => {
    switch (displayInfo) {
      case "overview":
        return {
          content: planetdata.overview.content,
          source: planetdata.overview.source,
          image: planetdata.overview.image,
          geo: "",
        };
      case "structure":
        return {
          content: planetdata.structure.content,
          source: planetdata.structure.source,
          image: planetdata.structure.image,
          geo: "",
        };
      case "geology":
        return {
          content: planetdata.geology.content,
          source: planetdata.geology.source,
          image: planetdata.geology.image,
          geo: planetdata.geology.geo,
        };
      default:
        return { content: "", source: "", image: "", geo: "" };
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-3/5  grid grid-rows-[4fr,1fr] grid-cols-[2fr,1fr] gap-4 mt-28 text-white">
        <div className="flex justify-center">
          <motion.div
            key={content().content}
            initial={{ opacity: 0, x: 260, scale: 0.2, rotate: "20deg" }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, x: -260, scale: 0.2, rotate: "-20deg" }}
            transition={{ duration: 2, ease: easeInOut }}
          >
            <div className=" flex flex-col justify-center items-center relative">
              <Image src={content().image} height={450} alt="planet" />
              {content().geo && (
                <Image
                  src={content().geo}
                  alt="planet"
                  height={150}
                  width={150}
                  className="absolute top-96"
                />
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 160 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 160 }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <div className="text-6xl font-bold my-6">
            {planetdata.name.toUpperCase()}
          </div>
          <div className="flex flex-col text-slate-400">
            <motion.div
              className="h-44 flex justify-center items-center"
              key={content().content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: easeInOut }}
            >
              {content().content}
            </motion.div>
            <div className="mt-4 mb-10">
              Source:{" "}
              <a href={content().source} className="font-bold underline">
                {" "}
                Wikipedia
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <SectionButton
              displayInfo={displayInfo}
              sectionColor={planetdata.sectionColor}
              setDisplayInfo={setDisplayInfo}
              section="overview"
              sr="01"
            >
              OVERVIEW
            </SectionButton>
            <SectionButton
              displayInfo={displayInfo}
              sectionColor={planetdata.sectionColor}
              setDisplayInfo={setDisplayInfo}
              section="structure"
              sr="02"
            >
              INTERNAL STRUCTURE
            </SectionButton>
            <SectionButton
              displayInfo={displayInfo}
              setDisplayInfo={setDisplayInfo}
              sectionColor={planetdata.sectionColor}
              section="geology"
              sr="03"
            >
              SURFACE GEOLOGY
            </SectionButton>
          </div>
        </motion.div>
        <motion.div
          className="col-span-2 flex flex-row gap-8 mt-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <Section heading="ROTATION TIME" value={planetdata.rotation} />
          <Section heading="REVOLUTION TIME" value={planetdata.revolution} />
          <Section heading="RADIUS" value={planetdata.radius} />
          <Section heading="AVERAGE TEMP" value={planetdata.temperature} />
        </motion.div>
      </div>
    </div>
  );
};

export default PlanetLayout;
