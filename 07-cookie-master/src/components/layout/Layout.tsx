import Head from "next/head";
import React from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
  <>
      <Head>

      </Head>
      <nav>
        <Navbar />  
      </nav>

      <main style={{ padding: "20px 50px" }}>
        {children}
    </main>
  </>
  );
};

export default Layout;
