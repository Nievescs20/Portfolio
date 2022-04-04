import React, { useEffect } from "react";
// import PropTypes from "prop-types";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = React.useState("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMediaQuery.matches ? "dark" : "light");
    darkMediaQuery.addEventListener("change", (e) => {
      setThemeName(e.matches ? "dark" : "light");
    });
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
    if (themeName === "light") {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
  };

  console.log("themeName", themeName);
  console.log("themeContext", ThemeContext);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
