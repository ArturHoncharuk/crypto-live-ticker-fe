import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

// Create a ThemeContext
const ThemeContext = createContext("light");

// Create a custom hook to access the theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Create a ThemeProvider component
export function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Define a function to toggle the theme
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
}
