import React from "react";
import "../styles/globals.css";
import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
            <SideBar />
          </div>

          {/* ClientProvider - Notifications */}

          <div className="bg-[#343541] flex-1 ">{children}</div>
        </div>
      </body>
    </html>
  );
}
