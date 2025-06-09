import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 size={40} className="text-orange-600" />, label: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-600" />, label: "CSS" },
    { icon: <SiJavascript size={40} className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact size={40} className="text-cyan-400" />, label: "React" },
    { icon: <FaBootstrap size={40} className="text-purple-600" />, label: "Bootstrap" },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, label: "Tailwind CSS" },
    { icon: <FaNode size={40} className="text-green-600" />, label: "Node.js" },
    { icon: <SiExpress size={40} className="text-gray-400" />, label: "Express.js" },
    { icon: <SiMongodb size={40} className="text-green-400" />, label: "MongoDB" },
    { icon: <FaGithub size={40} className="text-black dark:text-white" />, label: "GitHub" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {skills.map((skill, i) => (
          <div
            key={skill.label}
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:animate-bounce"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={i * 150}
            data-aos-duration="700"
           
          >
            {skill.icon}
            <p className="mt-2">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
