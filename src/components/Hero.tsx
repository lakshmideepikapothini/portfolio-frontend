import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaMapMarkerAlt, FaVolumeUp } from "react-icons/fa";
import { SiPython, SiReact, SiTypescript } from "react-icons/si";

const Hero = () => {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopListening = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsListening(false);
  };

  const startListening = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const message = "Hi, I’m Lakshmi Deepika, an AI-powered full-stack engineer I enjoy turning complex product ideas into elegant, reliable systems that feel effortless to use. From component architecture to AI-driven workflows, I focus on creating experiences that are fast, maintainable, and impactful.";
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1.08;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (voice) => voice.lang === "en-US" && /female|samantha|salli|jenny|victoria|zira|google us english/i.test(voice.name)
    ) || voices.find((voice) => voice.lang === "en-US") || voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
    setIsListening(true);
  };

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-shell"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero-copy">
          <p className="section-eyebrow">AI-powered full-stack engineer</p>
          <h1>Designing polished digital experiences with code and intelligence.</h1>
          <p className="hero-lead">
            I build fast, elegant products that blend thoughtful design, modern engineering, and AI-driven product thinking into experiences people genuinely enjoy using.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore projects <FaArrowRight />
            </a>
            <a className="secondary-button" href="#footer">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className={`listen-button ${isListening ? "is-active" : ""}`}
              onPointerDown={(event) => {
                event.preventDefault();
                startListening();
              }}
              onPointerUp={stopListening}
              onPointerLeave={stopListening}
              onPointerCancel={stopListening}
              onTouchEnd={stopListening}
              onTouchCancel={stopListening}
              onMouseUp={stopListening}
              onMouseLeave={stopListening}
              aria-pressed={isListening}
            >
              <FaVolumeUp />
              Hold to listen
            </button>
          </div>

          <div className="hero-highlights">
            <div className="hero-stat">
              <strong>3+ years</strong>
              <span>building products</span>
            </div>
            <div className="hero-stat">
              <strong>10+ shipped</strong>
              <span>features & experiences</span>
            </div>
            <div className="hero-stat">
              <strong>AI + Web</strong>
              <span>full-stack focus</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        >
          <div className="hero-avatar">LD</div>
          <h3>Lakshmi Deepika</h3>
          <p>React • TypeScript • Node • Python • AI</p>

          <div className="hero-pill-row">
            <span className="hero-pill">
              <SiReact /> React
            </span>
            <span className="hero-pill">
              <SiTypescript /> TypeScript
            </span>
            <span className="hero-pill">
              <SiPython /> Python
            </span>
          </div>

          <div className="hero-contact-row">
            <a href="https://github.com/lakshmideepikapothini" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lakshmi-deepika-481591294/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
              <FaLinkedin />
            </a>
            <span className="hero-location">
              <FaMapMarkerAlt /> Sunnyvale, CA
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;