import Head from "next/head";
import Navbar from "@components/Navbar";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  const [mounted, setMounted] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Angelo Aldecoa</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className={`transition-all ${mounted ? "visible" : "invisible"}`}>
          <Navbar setMounted={setMounted} />
          <main className="max-w-screen-lg m-auto px-4 pt-24 md:pt-32">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
