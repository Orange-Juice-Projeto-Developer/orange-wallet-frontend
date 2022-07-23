import React from "react";
import { HeaderMobile } from "../components/HeaderMobile";
import { HeaderDesktop } from "../components/HeaderDesktop";

export default function Home() {
  const container = document.getElementById("HomeContainer");

  return (
    <>
        <HeaderDesktop />
      <div id="HomeContainer" className="max-w-[1024px] h-[100vh] mx-auto">
        <HeaderMobile />
      </div>
    </>
  );
}
