export default function ProjectCard({ project, index }) {
  return (
    <div
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 200} // stagger by 200ms per card
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transform transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.stack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-primary text-white px-2 py-1 text-xs rounded transition-transform transform hover:scale-110"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Live ↗
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
