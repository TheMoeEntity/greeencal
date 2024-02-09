"use client";
import { useScrollTop } from "@/Helpers/hooks";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";
import { useValidRoute } from "@/Helpers/hooks";
import NotFound from "@/app/not-found";

const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop, pathname } = useScrollTop();

  if (useValidRoute(pathname)) {
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
  } else {
    return <NotFound />;
  }
};

export default Layout;
