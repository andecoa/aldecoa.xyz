import Head from "next/head";
import { ReactNode } from "react";

export type TPageWrapper = {
  pageTitle: string;
  children: ReactNode;
};

export default function PageWrapper({ pageTitle, children }: TPageWrapper) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </>
  );
}
