import { useRef, useEffect } from "react";
import Link from "next/link";
import navigationList from "@data/navigation-list";

export type TMenu = {
  menu: boolean;
};

export default function Menu({ menu }: TMenu) {
  const menuRef = useRef(null);
  useEffect(() => {
    const toggleMenu = () => {
      menuRef.current.style.transform = menu
        ? "translateY(-5px)"
        : "translateY(-100%)";
    };
    toggleMenu();
  }, [menu]);

  return (
    <nav
      ref={menuRef}
      style={{ transform: "translateY(-100%)" }}
      className="p-4 h-screen transition-transform duration-300 bg-indigo-200 dark:bg-gray-900"
    >
      <ul className="text-blue-800 dark:text-blue-200 mt-16 space-y-6">
        {navigationList.map((navItem) => (
          <li key={navItem.name}>
            <Link href={navItem.href}>
              <a className="block text-xl font-bold py-2">{navItem.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
