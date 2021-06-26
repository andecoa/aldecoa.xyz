import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

const ThemeChanger = ({
  setMounted,
}: {
  setMounted: Dispatch<SetStateAction<boolean>>;
}) => {
  const [componentIsMounted, setComponentIsMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setComponentIsMounted(true);
    setMounted(true);
  }, []);

  if (!componentIsMounted) return null;

  return (
    <div>
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

export default ThemeChanger;
