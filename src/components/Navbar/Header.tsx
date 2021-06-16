import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import ThemeSwitcher from "@components/Navbar/ThemeSwitcher";

export type THeader = {
  menu: boolean;
  toggleMenu: () => void;
};

export default function Header({ menu, toggleMenu }: THeader) {
  return (
    <div className="relative z-50 w-screen p-4 flex justify-between items-center bg-indigo-200 dark:bg-gray-900 dark:text-gray-200">
      <Link href="/">
        <a className="text-xl font-bold">Angelo Aldecoa</a>
      </Link>
      <div>
        <ThemeSwitcher />
        <button type="button" onClick={toggleMenu}>
          {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>
    </div>
  );
}
