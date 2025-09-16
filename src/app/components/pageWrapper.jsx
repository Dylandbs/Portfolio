"use client";

import Navbar from "./header/navbar";

export default function PageWrapper({ children }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <main>{children}</main>
    </>
  );
}
