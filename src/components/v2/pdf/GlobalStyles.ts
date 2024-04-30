import { Font } from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Inter",
  src: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;1,200;1,400&display=swap",
});

/* fonts */
export const FontFamily = {
  //   interRegular: "Inter-Regular",
  //   interMedium: "Inter-Medium",
  //   interLight: "Inter-Light",
  //   interExtraLight: "Inter-ExtraLight",
  interRegular: "Inter",
  interMedium: "Inter",
  interLight: "Inter",
  interExtraLight: "Inter",
};
/* font sizes */
export const FontSize = {
  size_2xs: 11,
  size_xl: 20,
  size_5xs: 8,
};
/* Colors */
export const Color = {
  colorBlack: "#000",
  colorDimgray: "#605c5c",
  colorGray: "#212121",
};
