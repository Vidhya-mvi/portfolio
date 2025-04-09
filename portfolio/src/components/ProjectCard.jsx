export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <img src={project.image} alt={project.title} className="rounded-lg" />
      <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {project.stack.map((tech, idx) => (
          <span key={idx} className="bg-primary text-white px-2 py-1 text-xs rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={project.live} target="_blank" className="text-primary">Live</a>
        <a href={project.github} target="_blank" className="text-primary">GitHub</a>
      </div>
    </div>
  );
}
