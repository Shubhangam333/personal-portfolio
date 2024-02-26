import About from "@/components/app/About";
import Experience from "@/components/app/Experience";
import Projects from "@/components/app/Projects";
import Skills from "@/components/app/Skills";

export default function Home() {
  return (
    <main className="px-12 mt-24">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
