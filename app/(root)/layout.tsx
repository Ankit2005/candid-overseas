"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Trigger your animation based on the 'scrollingDown' state
    if (scrollingDown) {
      // Code to trigger your animation when scrolling down
      // For example, you can use AOS.init() here
      AOS.init();
    }
  }, [scrollingDown]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
