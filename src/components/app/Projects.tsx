import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ProjectCard from "./ProjectCard";
import { data } from "../../data";

export default function Projects() {
  console.log("dd", data);
  return (
    <section className="flex flex-col items-center justify-center my-8 gap-6">
      <h1 className="lg:text-5xl text-3xl  text-center my-8">Projects</h1>
      <p className="text-lg font-bold text-gray-400">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </p>

      <div className="flex flex-wrap w-full gap-6 items-center justify-center h-full">
        {data.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
