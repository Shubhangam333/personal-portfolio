"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface navItem {
  href: string;
  name: string;
}

const navItems: navItem[] = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/skills",
    name: "Skills",
  },
  {
    href: "/experience",
    name: "Experience",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/education",
    name: "Education",
  },
];
export default function Navbar() {
  const [mobNavActive, setMobNavActive] = useState<Boolean>(false);
  return (
    <header className="flex items-center justify-between z-[120] bg-[#020817]  shadow py-4 px-4 h-16 fixed top-0 left-0 right-0">
      <Link
        className="text-xl tracking-wider text-gray-100 flex justify-center items-center"
        href="#"
      >
        <ChevronLeft className="text-[#854CE6] font-bold" />
        Shubhangam <span className="text-[#854CE6]"> /</span> Saxena
        <ChevronRight className="text-[#854CE6] font-bold" />
      </Link>
      <nav className="lg:block hidden text-md ">
        {navItems.map((d, i) => (
          <Button
            variant="link"
            className="hover:text-[#854CE6] text-nowrap transition-all duration-200  text-md"
            key={i}
          >
            <Link className="" href={d.href}>
              {d.name}
            </Link>
          </Button>
        ))}
      </nav>
      <Link
        className="text-md text-nowrap tracking-wider text-[#854CE6] border-[1px] border-[#854CE6]  hover:bg-[#854CE6] hover:text-gray-100 px-6 py-2 rounded-full transition-all duration-300 lg:block hidden"
        href="#"
      >
        <span>Github Profile</span>
      </Link>

      <Button
        variant="link"
        onClick={() => setMobNavActive(!mobNavActive)}
        className="hover:text-[#854CE6] lg:hidden text-nowrap transition-all duration-200  "
      >
        <AlignJustify size={32} />
      </Button>
      {mobNavActive && <MobileNav />}
    </header>
  );
}

function MobileNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-14 bg-[#13131F] z-[100] py-4 lg:hidden"
    >
      <section className=" flex flex-col gap-2 ">
        {navItems.map((d, i) => (
          <Button
            variant="link"
            className="hover:text-[#854CE6] text-nowrap transition-all duration-200  text-md"
            key={i}
          >
            <Link className="" href={d.href}>
              {d.name}
            </Link>
          </Button>
        ))}

        <Link
          className="text-md text-nowrap self-center tracking-wider text-[#854CE6] border-[1px] border-[#854CE6]  hover:bg-[#854CE6] hover:text-gray-100 px-6 py-2 rounded-full transition-all duration-300"
          href="#"
        >
          <span>Github Profile</span>
        </Link>
      </section>
    </motion.nav>
  );
}
