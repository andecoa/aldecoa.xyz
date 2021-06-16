import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoonOutline, IoFlashOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="mr-4 inline-block">
        <IoFlashOutline size={30} />
      </div>
    );

  return (
    <div className="mr-4 inline-block">
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <IoMoonOutline size={30} />
        ) : (
          <IoSunnyOutline size={30} />
        )}
      </button>
    </div>
  );
}
