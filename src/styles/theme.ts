const colors = {
  white: "#fff",
  gray_100: "#ECEBF1",
  gray_200: "#D2D2D2",
  gray_300: "#737373",
  gray_400: "#525252",
  gray_500: "#575757",
  gray_600: "#383838",
  black: "#000",
  primary: "#04C09E",
  card_1: "#E24141",
  card_2: "#547CE4",
  card_3: "#73BC6D",
  card_4: "#DE59B9",
  card_5: "#04C09E",
  card_6: "#E76E9A",
  card_7: "#F37D3B",
  card_8: "#FBCD58",
};

const fontSizes = {
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "24px",
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const theme = {
  colors,
  fontSizes,
  fontWeights,
};

export type Colors = typeof colors;
export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;

export default theme;
