import earthImage from "../../assets/images/planet-earth.svg";
import jupiterImage from "../../assets/images/planet-jupiter.svg";
import marsImage from "../../assets/images/planet-mars.svg";
import mercuryImage from "../../assets/images/planet-mercury.svg";
import neptuneImage from "../../assets/images/planet-neptune.svg";
import saturnImage from "../../assets/images/planet-saturn.svg";
import uranusImage from "../../assets/images/planet-uranus.svg";
import venusImage from "../../assets/images/planet-venus.svg";

export const planets = {
  mercury: {
    image: mercuryImage,
    zindex: 99,
    size: 6,
    link: "/mercury",
    sectionColor: "#419db9",
  },
  venus: {
    image: venusImage,
    zindex: 98,
    size: 10,
    link: "/venus",
    sectionColor: "#eda44a",
  },
  earth: {
    image: earthImage,
    zindex: 97,
    size: 14,
    link: "/earth",
    sectionColor: "#6f2ed6",
  },
  mars: {
    image: marsImage,
    zindex: 96,
    size: 20,
    link: "/mars",
    sectionColor: "#d14e33",
  },
  jupiter: {
    image: jupiterImage,
    zindex: 95,
    size: 26,
    link: "/jupiter",
    sectionColor: "#d93b36",
  },
  saturn: {
    image: saturnImage,
    zindex: 94,
    size: 32,
    link: "/saturn",
    sectionColor: "#cb5020",
  },
  uranus: {
    image: uranusImage,
    zindex: 93,
    size: 38,
    link: "/uranus",
    sectionColor: "#1ec2a4",
  },
  neptune: {
    image: neptuneImage,
    zindex: 92,
    size: 44,
    link: "/neptune",
    sectionColor: "#2d68f0",
  },
};
