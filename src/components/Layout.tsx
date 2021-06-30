import Head from "next/head";
import Navbar from "@components/Navbar";
import { useState, useEffect, ReactNode } from "react";
import { useTheme } from "@hooks/ThemeProvider";

export type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Angelo Aldecoa</title>
      </Head>
      <div className={theme}>
        <Navbar />
        <main className="max-w-screen-lg m-auto px-4 pt-24 md:pt-32">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
