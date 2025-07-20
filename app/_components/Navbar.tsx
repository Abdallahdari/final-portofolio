"use client";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cvcounter } from "../_lib/action";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, SetCounter] = useState(0);
  const incrementCounter = (e) => {
    e.preventDefault();
    Cvcounter(counter + 1);
    SetCounter(counter + 1);
    // Redirect to the PDF page
  };

  return (
    <form
      onSubmit={incrementCounter}
      className="Desktop w-full sticky top-4 z-40"
    >
      {/* Desktop View */}
      <div className="md:flex hidden items-center justify-between gap-5 px-4">
        <div className="md:flex flex-row space-x-12 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
          <div className="flex items-center gap-3">
            <Image
              src={"/pro.png"}
              height={12}
              width={12}
              className="w-5 h-5 rounded-full"
              alt="Profile picture"
            />
            <p className="text-[14px] font-sans text-white">
              Abdullahi abdirisaaq
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={"/"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              Home
            </Link>

            <Link
              href={"/projects"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              Project
            </Link>
          </div>
        </div>
        <Link
          href={"/pdf"}
          className="bg-[rgb(55,61,67)] text-white flex items-center justify-center py-2 px-4 rounded-xl hover:bg-[#06B6D4] transition-all duration-300"
        >
          Download cv
        </Link>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-row space-x-12 items-center justify-between px-4">
        <div className="flex items-center gap-3 antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
          <Image
            src={"/pro.png"}
            height={12}
            width={12}
            className="w-5 h-5 rounded-full"
            alt="Profile picture"
          />
          <p className="text-[14px] font-sans text-white">
            Abdullahi abdirisaaq
          </p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#323238] hover:bg-[#06B6D4] text-white py-1 px-2 rounded-lg duration-300 transition-all"
        >
          <AlignLeft />
        </button>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-zinc-900 text-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <p className="text-lg font-semibold">Menu</p>
          <button
            className="bg-[#323238]  hover:bg-[#06B6D4] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-zinc-800 p-2 rounded-lg transition"
          >
            Home
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:bg-zinc-800 p-2 rounded-lg transition"
          >
            Project
          </Link>

          <Link
            href={"/pdf"}
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#06B6D4]  p-2 rounded-lg transition duration-300 "
          >
            Download CV
          </Link>
        </div>
      </div>
    </form>
  );
}
