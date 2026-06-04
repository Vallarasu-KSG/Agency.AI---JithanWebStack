import React from "react";
import assets from "../../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <img
      src={ theme === "dark" ? assets.sun_icon : assets.moon_icon }
      alt="theme-icon"
      onClick={ () => setTheme(theme === "dark" ? "light" : "dark") }
      style={{ width: "20px", cursor: "pointer", }}
    />
  );
};

export default ThemeToggleBtn;