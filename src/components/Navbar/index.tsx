import { useState, useEffect } from "react";
import Header from "@components/Navbar/Header";
import Menu from "@components/Navbar/Menu";
import Router from "next/router";

export default function index() {
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setMenu(false));
  }, []);

  const toggleMenu = (): void => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div className="fixed">
      <Header menu={menu} toggleMenu={toggleMenu} />
      <Menu menu={menu} />
    </div>
  );
}
