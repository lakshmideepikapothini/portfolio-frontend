import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaTools,
} from "react-icons/fa";
import {
  SiDocker,
  SiGraphql,
  SiJest,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPython,
  SiTypescript,
} from "react-icons/si";

type SkillGroup = {
  title: string;
  icon: ReactNode;
  items: Array<{ name: string; icon: ReactNode; years: number }>;
};

const formatYears = (years: number) => {
  const roundedYears = Math.floor(years);
  return years >= 3 ? `${roundedYears}+ years` : `${roundedYears} years`;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: [
      { name: "JavaScript", icon: <SiJavascript />, years: 3.5 },
      { name: "TypeScript", icon: <SiTypescript />, years: 3 },
      { name: "Python", icon: <SiPython />, years: 2.5 },
      { name: "Java", icon: <FaCode />, years: 1.5 },
      { name: "C", icon: <FaCode />, years: 1 },
    ],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    items: [
      { name: "React.js", icon: <FaReact />, years: 3.5 },
      { name: "React Native", icon: <FaReact />, years: 2 },
      { name: "Redux", icon: <FaReact />, years: 2.5 },
      { name: "Responsive UI", icon: <FaReact />, years: 3 },
      { name: "Bootstrap", icon: <FaReact />, years: 2.5 },
    ],
  },
  {
    title: "Backend & Data",
    icon: <FaNodeJs />,
    items: [
      { name: "Node.js", icon: <FaNodeJs />, years: 3 },
      { name: "Express.js", icon: <FaNodeJs />, years: 2.5 },
      { name: "REST APIs", icon: <FaDatabase />, years: 3 },
      { name: "GraphQL", icon: <SiGraphql />, years: 2.5 },
      { name: "MySQL", icon: <SiMysql />, years: 2 },
      { name: "MongoDB", icon: <SiMongodb />, years: 2 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaAws />,
    items: [
      { name: "AWS", icon: <FaAws />, years: 2.5 },
      { name: "Docker", icon: <SiDocker />, years: 2 },
      { name: "Kubernetes", icon: <SiKubernetes />, years: 1.5 },
      { name: "Jenkins", icon: <SiJenkins />, years: 2 },
      { name: "CI/CD", icon: <FaTools />, years: 2.5 },
    ],
  },
  {
    title: "AI & Automation",
    icon: <FaRobot />,
    items: [
      { name: "LangChain", icon: <FaRobot />, years: 1.5 },
      { name: "LlamaIndex", icon: <FaRobot />, years: 1 },
      { name: "OpenAI APIs", icon: <SiOpenai />, years: 1.5 },
      { name: "RAG", icon: <FaRobot />, years: 1.5 },
      { name: "TensorFlow", icon: <FaRobot />, years: 1.5 },
      { name: "Scikit-learn", icon: <FaRobot />, years: 1.5 },
    ],
  },
  {
    title: "Testing & Tools",
    icon: <FaGitAlt />,
    items: [
      { name: "Jest", icon: <SiJest />, years: 2.5 },
      { name: "Git", icon: <FaGitAlt />, years: 3 },
      { name: "GitHub", icon: <FaGitAlt />, years: 3 },
      { name: "Jira", icon: <FaTools />, years: 3 },
      { name: "Postman", icon: <FaTools />, years: 2.5 },
      { name: "Figma", icon: <FaTools />, years: 2 },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Core strengths</p>
        <h2>Skills & Technologies</h2>
        <p>
          These are the core technologies I’ve used across product development,
          cloud delivery, and AI-enabled engineering.
        </p>
      </motion.div>

      <div className="skills-categories">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="skills-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <div className="skills-card-header">
              <span className="skills-card-icon">{group.icon}</span>
              <h3 style={{ color: "#ffffff" }}>{group.title}</h3>
            </div>

            <div className="skills-list">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-pill"
                  title={`${formatYears(skill.years)} experience`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                  {hoveredSkill === skill.name && (
                    <span
                      className="skill-years"
                      style={{
                        marginLeft: 8,
                        backgroundColor: "rgba(0,0,0,0.06)",
                        padding: "2px 8px",
                        borderRadius: 12,
                        fontSize: "0.85rem",
                      }}
                    >
                      {Number.isInteger(skill.years)
                        ? `${skill.years} yrs`
                        : `${skill.years.toFixed(1)} yrs`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
