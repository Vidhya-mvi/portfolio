import { projects } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {projects.map((project, index) => (
  <ProjectCard key={index} project={project} index={index} />
))}

      </div>
    </section>
  );
}
