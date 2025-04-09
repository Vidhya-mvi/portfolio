import { projects } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </section>
  );
}
