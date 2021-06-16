import Head from "next/head";
import Navbar from "@components/Navbar/index";
import type { ReactNode } from "react";

export type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => (
  <>
    <Head>
      <title>Angelo Aldecoa</title>
    </Head>
    <Navbar />
    <main className="px-4">{children}</main>
  </>
);

export default Layout;
