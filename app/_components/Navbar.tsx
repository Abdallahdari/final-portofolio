"use client";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Desktop w-full sticky top-4 z-40">
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
              href={"/about"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              Project
            </Link>
          </div>
        </div>
        <div className="bg-[#373D43] text-white flex items-center justify-center py-2 px-4 rounded-xl hover:bg-[#363a3a] transition-all duration-300">
          <Link href={"/pdf"}>Download cv</Link>
        </div>
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
          className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
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
            className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
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
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:bg-zinc-800 p-2 rounded-lg transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:bg-zinc-800 p-2 rounded-lg transition"
          >
            Project
          </Link>
          <Link
            href="/pdf"
            onClick={() => setIsOpen(false)}
            className="hover:bg-zinc-800 p-2 rounded-lg transition"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}
