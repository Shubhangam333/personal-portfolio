"use client";

import { ReactTyped } from "react-typed";
import HeroSvg from "./svg/HeroSvg";

export default function About() {
  return (
    <section className="mt-24 flex justify-between items-center">
      <div className="flex flex-col gap-4 items-start">
        <hgroup className="font-bold text-5xl flex flex-col gap-4">
          <h1>Hi, I am</h1>
          <h1>Shubhangam Saxena</h1>
        </hgroup>
        <h2 className="font-normal text-4xl flex gap-4">
          I am a{" "}
          <span className="text-[#854CE6]">
            <ReactTyped
              strings={["Full Stack Developer"]}
              typeSpeed={100}
              loop
            />
          </span>
        </h2>
        <p className="text-xl text-slate-400 max-w-[550px] leading-8">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>

        <button className="mt-4 hover:scale-105 transition-all py-4 px-20 rounded-full font-medium text-xl bg-gradient-to-r from-[#CE00FF] to-[#854CE6]">
          Check Resume
        </button>
      </div>
      <div className="w-[500px] h-full">
        <HeroSvg />
      </div>
    </section>
  );
}
