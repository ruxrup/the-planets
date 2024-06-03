import React, { ReactNode } from "react";
import { animate, easeInOut, motion } from "framer-motion";
import Link from "next/link";

const NavBarLink = ({
  children,
  link,
  path,
}: {
  children: ReactNode;
  link: string;
  path: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link
        href={link}
        className={`  h-20 flex items-center hover:text-white   ${
          path === link ? "text-white" : ""
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavBarLink;
