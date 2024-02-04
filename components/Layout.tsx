"use client";
import { useScrollTop } from "@/Helpers/hooks";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop, pathname } = useScrollTop();
  return (
    <>
      {<Header />}
      {children}
      {<Footer />}
      <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </>
  );
};

export default Layout;
