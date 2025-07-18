import React from "react";
import pro from "../../public/main.jpg";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      id="hero"
      className="mt-24 w-full  flex flex-col  justify-center px-4  md:flex-row  items-center md:justify-between  gap-4 "
    >
      <div className="md:max-w-[600px] w-full">
        <h1 className="md:text-5xl text-3xl text-white font-bold  mb-4">
          Software Engineer and{" "}
          <span className="text-[#06B6D4]"> Web Devloper</span>
        </h1>
        <div className=" ">
          <p className="text-xl text-gray-200 ">
            I am Abdullahi Abdirizak, a Software Engineer and Web Developer. I
            finished my bachelor’s degree at Üsküdar University in Turkey. I am
            also the founder of the Dalab E-commerce website, where I apply my
            technical skills and business insights to create innovative online
            shopping experiences .
          </p>
        </div>
      </div>
      <Image
        src={pro}
        alt="Profile Picture"
        height={400}
        width={400}
        className=" w-72 h-72 rounded-full object-cover shadow-lg"
      />
    </div>
  );
}
