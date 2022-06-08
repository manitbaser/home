import mixins from './mixins';

const base = {
  easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  colorBlack: "rgb(0, 0, 0)",
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  mixins,
};

const dark = {
  id: "dark",
  ...base,
  navyColor: "#0a192f",
  navTextColor: "#ccd6f6",
  navListColor: "#64ffda",
  navBGColor: "rgba(10, 25, 47, 0.85)",
  navListColorHover: "rgba(100, 255, 218, 0.2)",
  paraColor: "#8892b0",
  lightestSlateColor: "#ccd6f6",
  lightNavyColor: "#112240",
  lightSlateColor: "#a8b2d1",
  whiteColor: "e6f1ff",
  cardsColor: "#112240",
};

const light = {
  id: "light",
  ...base,
  navyColor: "#fefefe",
  navTextColor: "#233554",
  navListColor: "#fc3d03",
  navBGColor: "rgba(250, 250, 250, 0.2)",
  navListColorHover: "rgba(252, 61, 3, 0.2)",
  paraColor: "#495670",
  lightestSlateColor: "#495670",
  lightNavyColor: "#a8b2d1",
  lightSlateColor: "#112240",
  whiteColor: "0a192f",
  cardsColor: "#ffffff",
};

export const theme = { dark, light };
