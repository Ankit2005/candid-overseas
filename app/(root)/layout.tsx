"use client";

import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
