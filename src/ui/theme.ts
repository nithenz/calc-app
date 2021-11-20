export type ThemeAppearance = "light" | "dark";
export type ThemeBw = "black" | "white";

export const Theme = {
  colors: {
    white: "white",
    black: "black",
  },
  appearance: "light" as ThemeAppearance,
  dark: false,
  bw: "white" as ThemeBw,
  wb: "black" as ThemeBw,
  borderGray: "#e5e5e5",
};

export type AppTheme = typeof Theme;
