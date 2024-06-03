import React from "react";
import PlanetLayout from "../components/PlanetLayout/PlanetLayout";
import { data } from "./data";

const page = () => {
  return <PlanetLayout planetdata={data} />;
};

export default page;
