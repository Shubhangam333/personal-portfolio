"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import { Button } from "../ui/button";

export default function ProjectCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>
              <Image
                src="/ecom-mern.png"
                alt="ecom"
                // fill={true}
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
              />
            </CardTitle>
            <CardDescription>
              <span className="bg-[#231E36] text-[#854CE6] text-xs px-2 py-1 rounded-lg">
                React Js
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-[#C3C4C5] font-bold">Ecommerce App</p>
          </CardContent>
          <CardFooter>
            <p className="text-[#C3C4C5] ">
              By combining the strengths of the MERN stack, Redux Toolkit, React
              Query, and Tailwind CSS,
            </p>
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[60%] w-[60%] p-8 fixed  z-[1200]  h-[400px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>
            <EmblaCarousel />
          </DialogTitle>
          <DialogDescription className="pt-5 flex flex-col gap-5 items-start">
            <p className="text-white font-bold text-xl">Ecommerce App</p>
            <span className="bg-[#231E36] text-[#854CE6] text-xs px-2 py-1 rounded-lg">
              React Js
            </span>
            <p>
              By combining the strengths of the MERN stack, Redux Toolkit, React
              Query, and Tailwind CSS, this e-commerce website would offer a
              secure, scalable, and visually appealing platform for both users
              and administrators
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between w-full">
          <Button variant={"outline"} className="w-full">
            View Code
          </Button>
          <Button
            variant={"outline"}
            className="bg-[#854CE6] hover:opacity-90 w-full"
          >
            View Live App
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
