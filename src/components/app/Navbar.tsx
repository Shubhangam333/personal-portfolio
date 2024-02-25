import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <header className="flex items-center justify-between  shadow">
      <Link
        className="text-xl tracking-wider text-gray-100 flex justify-center items-center"
        href="#"
      >
        <ChevronLeft className="text-[#854CE6] font-bold" />
        Shubhangam <span className="text-[#854CE6]"> /</span> Saxena
        <ChevronRight className="text-[#854CE6] font-bold" />
      </Link>
      <nav className="space-x-4">
        {navItems.map((d, i) => (
          <Button
            variant="link"
            className="hover:text-[#854CE6] transition-all duration-200  text-md"
            key={i}
          >
            <Link className="" href={d.href}>
              {d.name}
            </Link>
          </Button>
        ))}
      </nav>
      <Link
        className="text-md tracking-wider text-[#854CE6] border-[1px] border-[#854CE6]  hover:bg-[#854CE6] hover:text-gray-100 px-6 py-2 rounded-full transition-all duration-300"
        href="#"
      >
        <span>Github Profile</span>
      </Link>
    </header>
  );
}
