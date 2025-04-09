import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">

        <div className="flex flex-col items-center">
          <FaHtml5 size={40} className="text-orange-600" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size={40} className="text-blue-600" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript size={40} className="text-yellow-400" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={40} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap size={40} className="text-purple-600" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={40} className="text-teal-400" />
          <p className="mt-2">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <FaNode size={40} className="text-green-600" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress size={40} className="text-gray-400" />
          <p className="mt-2">Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb size={40} className="text-green-400" />
          <p className="mt-2">MongoDB</p>
        </div>

        <div className="flex flex-col items-center">
          <FaGithub size={40} className="text-black dark:text-white" />
          <p className="mt-2">GitHub</p>
        </div>
      </div>
    </section>
  );
}
