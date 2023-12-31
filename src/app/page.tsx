"use client";
// src/app/pages.tsx
import React from "react";
import { usePathname } from "next/navigation";
import Main from "@/pages/Main";
import Search from "@/pages/Search";
import Profile from "@/pages/Profile";

const Home = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <Main />}
      {pathname === "/search" && <Search />}
      {pathname === "/profile" && <Profile />}
    </>
  );
};

export default Home;
