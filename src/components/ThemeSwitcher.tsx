import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const ThemeChanger = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={className}>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")} type="button">
          <IoMoonOutline size={30} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} type="button">
          <IoSunnyOutline size={30} />
        </button>
      )}
    </div>
  );
};

ThemeChanger.defaultProps = {
  className: null,
};

export default ThemeChanger;
