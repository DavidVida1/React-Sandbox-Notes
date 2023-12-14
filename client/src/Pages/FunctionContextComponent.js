import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#004369" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: " 5rem",
    margin: "25px 0px",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>;
    </>
  );
}
