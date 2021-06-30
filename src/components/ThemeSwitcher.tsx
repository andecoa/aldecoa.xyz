import { useTheme } from "@hooks/ThemeProvider";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeChanger = () => {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null;

  if (theme === "dark")
    return (
      <button onClick={toggleTheme} type="button">
        <IoMoonOutline size={30} />
      </button>
    );

  return (
    <button onClick={toggleTheme} type="button">
      <IoSunnyOutline size={30} />
    </button>
  );
};

export default ThemeChanger;
