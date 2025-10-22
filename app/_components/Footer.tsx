import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center py-4 text-white">
      <div className="flex flex-col gap-3">
        <div className="flex items-center  justify-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={"/pro.png"}
              height={20}
              width={20}
              className="w-7 h-7 rounded-full"
              alt="Profile picture"
            />
            <p className="text-xl font-bold ">Abdullahi abdirisaaq</p>
          </div>
        </div>

        <p className="text-sm ">
          © {new Date().getFullYear()} Devpro Portfolio Template. All rights
          reserved.
        </p>
        <div className="flex items-center gap-2 justify-center">
          <Link
            href={"https://github.com/Abdallahdari"}
            className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
          >
            <Github />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/abdullahi-abdirizak-mohamed-96b5a4253/"}
            className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
          >
            <Linkedin />
          </Link>
          <Link
            href={"https://www.instagram.com/dhere_coder_/"}
            className="hover:bg-[#323238] text-white py-1 px-2 rounded-lg duration-300 transition-all"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
