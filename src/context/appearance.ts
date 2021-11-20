import { createContext, useContext } from "react";
import { ThemeAppearance } from "../ui/theme";

export interface IAppearanceContext {
  appearance: ThemeAppearance;
  setAppearance: (newAppearanceValue: ThemeAppearance) => any;
  toggleAppearance: () => any;
}

export const AppearanceContext = createContext<IAppearanceContext>({
  appearance: "light",
  setAppearance: () => {},
  toggleAppearance: () => {
    return "light";
  },
});

export function useAppearance() {
  return useContext(AppearanceContext);
}
