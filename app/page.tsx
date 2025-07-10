import React from "react";
import Hero from "./_components/Hero";
import Experice from "./_components/Experice";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { CardHoverEffectDemo } from "./_components/CardHoverEffectDemo";

// import BlogFetching from "./_components/BlogFetching";
export default function page() {
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-7 ">
      <>
        <Navbar />
        <Hero />
        <div className="px-4">
          <Experice />
        </div>
        <CardHoverEffectDemo />
        {/* <BlogFetching /> */}
        <Footer />
      </>
    </div>
  );
}
