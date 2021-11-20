import "@emotion/react";
import { Theme } from "./ui/theme";

type AppTheme = typeof Theme;

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
