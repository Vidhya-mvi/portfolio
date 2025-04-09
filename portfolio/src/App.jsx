import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-bgDark bg-white dark:text-white text-black transition duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Footer/>
    </div>
  );
}

export default App;
