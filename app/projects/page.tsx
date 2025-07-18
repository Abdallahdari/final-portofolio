import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { GetProject } from "../_lib/data";
import { HoverEffect3 } from "./Hover2";

export default async function page() {
  const items = await GetProject();
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-7 ">
      <Navbar />
      <h1 className="md:text-5xl max-w-[1000px] text-3xl text-white font-bold mt-12 mb-4">
        I have been engaged in the development of
        <span className="text-[#06B6D4]"> various Projects</span>
      </h1>

      <HoverEffect3 items={items} />

      <Footer />
    </div>
  );
}
