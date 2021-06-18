import Head from "next/head";
import Navbar from "@components/Navbar";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => (
  <>
    <Head>
      <title>Angelo Aldecoa</title>
    </Head>
    <ThemeProvider attribute="class">
      <div className="transition-all">
        <Navbar />
        <main className="max-w-screen-lg m-auto px-4 pt-12">{children}</main>
      </div>
    </ThemeProvider>
  </>
);

export default Layout;
