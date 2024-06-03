import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { planetdata } from "./PlanetLayout";

const SectionButton = ({
  children,
  displayInfo,
  setDisplayInfo,
  section,
  sr,
  sectionColor,
}: {
  children: ReactNode;
  displayInfo: string;
  setDisplayInfo: Dispatch<SetStateAction<keyof planetdata>>;
  section: keyof planetdata;
  sr: string;
  sectionColor: string;
}) => {
  const buttonStyle = {
    backgroundColor: displayInfo === section ? sectionColor : undefined,
  };
  return (
    <button
      onClick={() => {
        setDisplayInfo(section);
      }}
      style={buttonStyle}
      className={`border border-slate-700 p-4 mb-4 font-semibold text-sm flex flex-row gap-6 pl-8 hover:bg-slate-800 `}
    >
      <div className="text-slate-500 font-bold">{sr}</div>
      {children}
    </button>
  );
};

export default SectionButton;
