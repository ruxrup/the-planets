"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { animate, easeInOut, motion } from "framer-motion";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  const path = usePathname();
  return (
    <div className="flex justify-center border-b border-slate-700 ">
      <div className="h-20 text-white flex flex-row w-4/5 justify-between items-center font-semibold">
        <div className="justify-self-start text-2xl h-20 flex items-center">
          <Link href="/"> THE PLANETS </Link>
        </div>
        <div className="flex flex-row gap-x-8 text-sm text-slate-400">
          <NavBarLink link="/mercury" path={path}>
            MERCURY
          </NavBarLink>
          <NavBarLink link="/venus" path={path}>
            VENUS
          </NavBarLink>
          <NavBarLink link="/earth" path={path}>
            EARTH
          </NavBarLink>
          <NavBarLink link="/mars" path={path}>
            MARS
          </NavBarLink>
          <NavBarLink link="/jupiter" path={path}>
            JUPITER
          </NavBarLink>
          <NavBarLink link="/saturn" path={path}>
            SATURN
          </NavBarLink>
          <NavBarLink link="/uranus" path={path}>
            URANUS
          </NavBarLink>
          <NavBarLink link="/neptune" path={path}>
            NEPTUNE
          </NavBarLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
