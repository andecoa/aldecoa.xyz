import { useState } from "react";
import Header from "@components/Navbar/Header";
import Menu from "@components/Navbar/Menu";

export default function index() {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div>
      <Header menu={menu} toggleMenu={toggleMenu} />
      <Menu menu={menu} />
    </div>
  );
}
