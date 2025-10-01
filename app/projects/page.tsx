import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { GetProject } from "../_lib/data";
import { HoverEffect3 } from "./Hover2";
export const dynamic = "force-dynamic";
export async function page() {
  const items = await GetProject();
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-7 ">
      <Navbar />
      <h1 className="md:text-5xl  text-center text-3xl text-white font-bold mt-12 mb-4">
        My
        <span className="text-[#06B6D4]"> Projects</span>
      </h1>
      <p className="text-center text-gray-400 ">
        A compilation of projects I have undertaken, highlighting my
        competencies in web development.
      </p>{" "}
      <HoverEffect3 items={items} />
      <Footer />
    </div>
  );
}
