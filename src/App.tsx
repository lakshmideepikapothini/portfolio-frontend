import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return (
    <>
      <div
        className="cursor-ripple"
        style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }}
        aria-hidden="true"
      />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Project />
      <Skills />
      <Footer />
    </>
  );
}

export default App;