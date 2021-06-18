import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import useSanitizedPath from "@hooks/useSanitizedPath";
import ThemeSwitcher from "@components/ThemeSwitcher";

export default function index() {
  const [menu, toggleMenu] = useState<boolean>(false);
  const sanitizedPath = useSanitizedPath();

  useEffect(() => {
    toggleMenu(false);
  }, [sanitizedPath]);

  return (
    <div className="shadow text-lg font-bold">
      <div className="relative max-w-screen-lg m-auto flex justify-between p-4 z-50">
        <div className="md:hidden">
          <Link href="/">
            <a className={sanitizedPath === "/" ? "active" : ""}>{`Aldecoa${
              sanitizedPath === "/" ? "" : sanitizedPath
            }`}</a>
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <a className={sanitizedPath === "/" ? "active" : ""}>Aldecoa</a>
          </Link>
        </div>

        {/* large screen menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/nfx">
              <a className={sanitizedPath === "/nfx" ? "active" : ""}>NFX</a>
            </Link>
          </li>
          <li>
            <Link href="/stack">
              <a className={sanitizedPath === "/stack" ? "active" : ""}>
                Stack
              </a>
            </Link>
          </li>
          <li>
            <Link href="/models">
              <a className={sanitizedPath === "/models" ? "active" : ""}>
                Models
              </a>
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/projects">
              <a className={sanitizedPath === "/projects" ? "active" : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={sanitizedPath === "/blog" ? "active" : ""}>Blog</a>
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex ">
          <Link href="/about">
            <a className={sanitizedPath === "/about" ? "active" : ""}>About</a>
          </Link>
          <ThemeSwitcher className="ml-4" />
        </div>

        <div className="md:hidden flex">
          <ThemeSwitcher className="mr-4" />
          <button type="button" onClick={() => toggleMenu((isMenu) => !isMenu)}>
            {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>
      </div>

      {/* small screen menu */}
      <div
        className={`md:hidden absolute top-0 flex justify-center items-center w-full h-full bg-white transition-transform duration-300 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-12 items-center">
          <li>
            <Link href="/nfx">
              <a className={sanitizedPath === "/nfx" ? "active" : ""}>NFX</a>
            </Link>
          </li>
          <li>
            <Link href="/stack">
              <a className={sanitizedPath === "/stack" ? "active" : ""}>
                Stack
              </a>
            </Link>
          </li>
          <li>
            <Link href="/models">
              <a className={sanitizedPath === "/models" ? "active" : ""}>
                Models
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={sanitizedPath === "/projects" ? "active" : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={sanitizedPath === "/blog" ? "active" : ""}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={sanitizedPath === "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
