import { useEffect, useState } from "react";
import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useTheme } from "../../context/ThemeContext";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (themeName === "day") {
      setImage(dayImage);
      return;
    } else if (themeName === "night") {
      setImage(nightImage);
      return;
    }
  }, [themeName]);

  return (
    <section>
      <img className="greenhouse-img" src={image} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
