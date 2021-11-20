import { useCallback, useState } from "react";
import { ThemeAppearance } from "../ui/theme";

export function useAppearance(defaultValue?: ThemeAppearance) {
  const [appearance, setAppearance] = useState<ThemeAppearance>(
    defaultValue ?? "light"
  );

  const handleSetAppearance = useCallback(
    (newAppearanceValue: ThemeAppearance) => {
      setAppearance(newAppearanceValue);
    },
    []
  );

  const toggleAppearance = useCallback(() => {
    setAppearance((prevValue) => (prevValue === "light" ? "dark" : "light"));
  }, []);

  return { appearance, setAppearance: handleSetAppearance, toggleAppearance };
}
