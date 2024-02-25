"use client";

import { ReactTyped } from "react-typed";
import HeroSvg from "./svg/HeroSvg";

export default function About() {
  return (
    <section className="flex justify-between items-center lg:flex-row gap-4 flex-col-reverse ">
      <div className="flex flex-col gap-4 lg:items-start items-center">
        <hgroup className="font-bold lg:text-4xl xl:text-5xl   sm:text-3xl text-xl  flex flex-col gap-4 lg:items-start items-center">
          <h1>Hi, I am</h1>
          <h1 className="sm:block flex flex-col items-center w-full">
            Shubhangam Saxena
          </h1>
        </hgroup>
        <h2 className="font-normal lg:text-4xl md:text-2xl sm:text-xl text-md flex gap-2 sm:flex-row flex-col items-center">
          I am a
          <span className="text-[#854CE6]">
            <ReactTyped
              strings={["Full Stack Developer"]}
              typeSpeed={100}
              loop
            />
          </span>
        </h2>
        <p className="lg:text-xl text-lg text-slate-400 max-w-[550px] leading-8 text-center lg:text-start">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>

        <button className="mt-4 hover:scale-105 transition-all py-4 sm:px-20 px-12 rounded-full font-medium sm:text-xl text-lg bg-gradient-to-r from-[#CE00FF] to-[#854CE6]">
          Check Resume
        </button>
      </div>
      <div className="md:w-[500px] sm:w-[400px] h-full w-[300px]">
        <HeroSvg />
      </div>
    </section>
  );
}
