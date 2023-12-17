import React, { useState } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const ThemeSwitch = ({ setTheme, theme }) => {
  const [lightDarkIcon, setLightDarkIcon] = useState(
    theme == "dark" ? sun : moon
  );

  const themeSwitchHandler = () => {
    if (theme == "dark") {
      setTheme("light");
      setLightDarkIcon(moon);
    }
    if (theme == "light") {
      setTheme("dark");
      setLightDarkIcon(sun);
    }
  };

  return (
    <img
      src={lightDarkIcon}
      className="theme-switch-icon"
      onClick={themeSwitchHandler}
    ></img>
  );
};

export default ThemeSwitch;
