import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
export default function page() {
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-7 ">
      <Navbar />
      <Footer />
    </div>
  );
}
