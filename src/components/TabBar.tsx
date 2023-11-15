// src/components/TabBar.tsx

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";

const TabBar = () => {
  return (
    <nav className="border border-gray-800 p-4">
      <div className="flex-col space-y-6">
        <TabItem icon={<HomeIcon className="w-6 h-6" />} path="/" />
        <TabItem
          icon={<MagnifyingGlassIcon className="w-6 h-6" />}
          path="/Search"
        />
        <TabItem
          icon={<IdentificationIcon className="w-6 h-6" />}
          path="/Profile"
        />
      </div>
    </nav>
  );
};

const TabItem = ({ icon, path }: { icon: React.ReactNode; path: string }) => {
  return (
    <Link href={path} className="flex items-center">
      <span>{icon}</span>
    </Link>
  );
};
export default TabBar;
