import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full sticky top-4 z-50 ">
      <div className="md:flex items-center justify-between gap-5 px-4">
        <div className="hidden md:flex flex-row space-x-12 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
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
              href={"#Expericne"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
            >
              About
            </Link>{" "}
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
    </div>
  );
}
