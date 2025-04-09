import { motion } from "framer-motion";
import { FaArrowDown, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

export default function Hero() {
  return (
<section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 text-black dark:text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:opacity-10 pointer-events-none" />

      <div className="flex flex-col items-start max-w-xl z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I'm{" "}
          <span className="text-black dark:text-white dark:drop-shadow">
            Vidhya M
          </span>
          <br />
          MERN Stack Developer
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I build full-stack apps with clean code, solid architecture, and beautiful UI using React, Node.js, MongoDB & Express.
        </motion.p>
      </div>

      
      <motion.div
        className="w-72 h-72 mt-12 md:mt-0 rounded-full border-4 border-primary shadow-xl overflow-hidden z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img
          src="/public/pic.webp"
          alt="Vidhya"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute top-[20%] left-[10%] text-4xl text-sky-500 z-0"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaReact className="hover:scale-125 transition-transform animate-float" />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[15%] text-3xl text-orange-500 z-0"
        initial={{ opacity: 0, x: -80, y: 80 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <FaHtml5 className="hover:scale-125 transition-transform animate-float-x" />
      </motion.div>

      <motion.div
  className="absolute top-[15%] right-[5%] text-4xl text-blue-500 z-0"
  initial={{ opacity: 0, x: 100, y: -100 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 1.4 }}
>
  <FaCss3 className="hover:scale-125 transition-transform animate-float-slow" />
</motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary text-xl animate-bounce z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}
