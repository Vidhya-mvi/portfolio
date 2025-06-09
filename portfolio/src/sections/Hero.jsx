import {
  FaArrowDown,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center md:flex-row px-6 md:px-20 py-12 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 text-black dark:text-white relative overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none 
        [background-image:repeating-linear-gradient(45deg,#000_0_1px,transparent_1px_10px)] 
        dark:[background-image:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_10px)]"
      />

      {/* Hero Text */}
      <div className="flex flex-col items-center md:items-start max-w-xl z-10 text-center md:text-left">
        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          Hey, I'm{" "}
          <span className="text-black dark:text-white dark:drop-shadow">
            Vidhya M
          </span>
          <br />
          MERN Stack Developer
        </h1>

        <p
          className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          I build full-stack apps with clean code, solid architecture, and beautiful UI using React, Node.js, MongoDB & Express.
        </p>
      </div>

      {/* Floating Icons */}
      <div
        className="absolute top-[20%] left-[10%] text-4xl text-sky-500 z-0 animate-float"
        data-aos="fade-down-right"
        data-aos-duration="1000"
      >
        <FaReact className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute bottom-[10%] left-[15%] text-3xl text-orange-500 z-0 animate-float-x"
        data-aos="fade-up-right"
        data-aos-duration="1200"
      >
        <FaHtml5 className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute top-[15%] right-[5%] text-4xl text-blue-500 z-0 animate-float-slow"
        data-aos="fade-down-left"
        data-aos-duration="1400"
      >
        <FaCss3 className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute top-[25%] right-[20%] text-3xl text-green-500 z-0 animate-float-x"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <FaNodeJs className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute top-[40%] left-[25%] text-3xl text-yellow-400 z-0 animate-float"
        data-aos="fade-up-left"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <SiJavascript className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute bottom-[20%] right-[15%] text-3xl text-green-400 z-0 animate-float-fast"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="900"
      >
        <SiMongodb className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute bottom-[30%] left-[5%] text-2xl text-red-500 z-0 animate-float"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="900"
      >
        <FaGitAlt className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute bottom-[40%] right-[25%] text-2xl text-pink-500 z-0 animate-float"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="900"
      >
        <FaNpm className="hover:scale-125 transition-transform" />
      </div>

      <div
        className="absolute top-[10%] left-[50%] text-2xl text-teal-400 z-0 animate-float-x"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <SiTailwindcss className="hover:scale-125 transition-transform" />
      </div>

      {/* Arrow Down */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary text-xl animate-bounce z-10"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="800"
      >
        <FaArrowDown />
      </div>
    </section>
  );
}
