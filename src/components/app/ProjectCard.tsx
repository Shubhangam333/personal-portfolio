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
import { ProjectType } from "@/interface";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>
              <Image
                src={project.images[0].path}
                alt={project.images[0].alt}
                // fill={true}
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
              />
            </CardTitle>
            <CardDescription className="flex gap-2 flex-wrap">
              {project.skills.map((s, id) => (
                <span
                  key={id}
                  className="bg-[#231E36] text-[#854CE6] text-xs px-2 py-1 rounded-lg"
                >
                  {s.toLowerCase()}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-[#C3C4C5] font-bold">Ecommerce App</p>
          </CardContent>
          <CardFooter>
            <p className="text-[#C3C4C5] ">
              {project.description.slice(0, 60)}...
            </p>
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[80%] w-[80%]  p-8 fixed  z-[1200]  h-[400px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>
            <EmblaCarousel />
          </DialogTitle>
          <DialogDescription className="pt-5 flex flex-col gap-5 items-start">
            <p className="text-white font-bold text-xl">{project.name}</p>
            <div className="flex gap-2 flex-wrap">
              {project.skills.map((s, id) => (
                <span
                  key={id}
                  className="bg-[#231E36] text-[#854CE6] text-xs px-2 py-1 rounded-lg"
                >
                  {s.toLowerCase()}
                </span>
              ))}
            </div>
            <p className="text-left">{project.description}</p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between w-full md:gap-0 gap-2">
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
