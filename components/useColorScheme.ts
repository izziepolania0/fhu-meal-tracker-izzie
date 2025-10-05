import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useColorScheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}
