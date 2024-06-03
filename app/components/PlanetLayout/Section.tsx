import React from "react";

const Section = ({ heading, value }: { heading: string; value: string }) => {
  return (
    <div className="h-32 w-64 flex flex-col gap-4 p-6 border border-slate-700">
      <div className="text-sm font-bold text-slate-500">{heading}</div>
      <div className="text-3xl font-bold">{value.toUpperCase()}</div>
    </div>
  );
};

export default Section;
