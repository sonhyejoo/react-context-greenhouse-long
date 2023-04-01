import "./LightSwitch.css";
import { useTheme } from "../../context/ThemeContext";

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  function handleClick(onOff) {
    if (onOff === "on") {
      setThemeName("day");
      return;
    } else if (onOff === "off") {
      setThemeName("night");
      return;
    }
  }
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={() => handleClick("on")}>
        DAY
      </div>
      <div className="off" onClick={() => handleClick("off")}>
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
