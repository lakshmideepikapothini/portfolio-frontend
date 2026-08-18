import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    "I build polished, responsive interfaces with React, TypeScript, and modern UI systems.",
    "I pair product thinking with engineering depth to ship reliable, scalable features.",
    "I enjoy connecting AI workflows with practical user outcomes and measurable product value.",
  ];

  return (
    <section id="about" className="section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">About me</p>
        <h2>Designing thoughtful products with engineering depth</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p>
            I&apos;m Lakshmi Deepika, an AI & Full-Stack Developer with 3+ years of experience building scalable web and mobile applications. I specialize in creating high-performance frontend experiences with React, React Native, TypeScript, and Node.js while integrating intelligent AI solutions powered by Python, LangChain, LlamaIndex, RAG, and OpenAI APIs.
          </p>
          <p>
            I enjoy turning complex product ideas into elegant, reliable systems that feel effortless to use. From component architecture to AI-driven workflows, I focus on creating experiences that are fast, maintainable, and impactful.
          </p>

          <div className="about-actions">
            <a className="primary-button" href="#projects">
              See selected work
            </a>
            <a className="secondary-button" href="#skills">
              Review skills
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-list-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
