import React from "react";
import TabBar from "./TabBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="vscode-dark-theme flex flex-col h-screen">
      <header className="vscode-dark-theme-header bg-gray-800 p-4">
        <h1 className="text-white">Colagom&apos;s Blog</h1>
      </header>
      <main className="vscode-dark-theme-content p-4 flex-row flex">
        <TabBar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
