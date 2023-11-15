"use client";
import React from "react";

import Main from "@/pages/Main";
import Search from "@/pages/Search";
import Profile from "@/pages/Profile";
import { usePathname } from "next/navigation";

const Contents = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && <Main />}
      {pathname === "/Search" && <Search />}
      {pathname === "/Profile" && <Profile />}
    </div>
  );
};

export default Contents;
