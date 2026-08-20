import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    company: 'Walmart',
    location: 'Sunnyvale, CA',
    role: 'Full-Stack Software Engineer',
    dates: 'June 2025 – Present',
    tags: ['Java 17', 'Spring Boot', 'React', 'AWS', 'AI/ML'],
    bullets: [
      'Built React 18/19 frontend modules with TypeScript and Redux, integrating REST and GraphQL APIs with Java Spring Boot services to improve data-processing efficiency by 25%.',
      'Developed Java 17 and Spring Boot microservices integrated with AWS Lambda, API Gateway, DynamoDB, and ECS, improving application scalability by 30%.',
      'Developed Node.js services and implemented Redis caching and API optimization techniques, reducing average API response latency by 35%.',
      'Built AI-powered features using Amazon Bedrock, LangChain, Python, RAG, and OpenAI APIs for intelligent search and document retrieval, improving information retrieval efficiency by 40%.',
      'Optimized React applications with lazy loading, component optimization, and efficient state management while adding automated tests with Jest and React Testing Library.',
      'Supported deployments using Docker, Kubernetes, Jenkins, Terraform, and AWS services, reducing deployment effort by 40%.',
    ],
  },
  {
    company: 'WillowTree – TELUS',
    location: 'Fairfax, VA',
    role: 'Full-Stack Developer',
    dates: 'September 2024 – May 2025',
    tags: ['Java 17', 'Spring Boot', 'React', 'Kafka', 'AWS'],
    bullets: [
      'Developed responsive React and TypeScript applications and integrated REST and GraphQL services, reducing frontend-backend integration issues by 20%.',
      'Developed Java 17 and Spring Boot microservices using REST APIs, Spring Data JPA, and Hibernate, improving business workflow processing efficiency by 25%.',
      'Built backend integration services using Apache Kafka, AWS SQS, and SNS, improving asynchronous processing reliability by 30%.',
      'Containerized applications using Docker and deployed services with Kubernetes, AWS, Terraform, and Jenkins, reducing manual deployment effort by 40%.',
    ],
  },
  {
    company: 'Advithri Technologies',
    location: 'Internship',
    role: 'Front-End Developer',
    dates: 'August 2023 – December 2024',
    tags: ['React.js', 'TypeScript', 'HTML5', 'CSS3'],
    bullets: [
      'Developed responsive web applications using React.js, JavaScript, TypeScript, HTML5, and CSS3, building reusable components that reduced frontend development effort by 25%.',
      'Integrated React applications with RESTful APIs and collaborated with Java Spring Boot developers to ensure reliable frontend-backend communication, reducing integration issues by 20%.',
      'Implemented responsive designs, cross-browser compatibility, and React Hooks while debugging UI issues, improving usability and reducing recurring frontend defects by 25%.',
    ],
  },
];

const Project = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Projects & impact</p>
        <h2>Selected experience across product engineering</h2>
      </motion.div>

      {experiences.map((exp, index) => (
        <motion.article
          className={`project-card ${visible ? 'project-visible' : 'project-hidden'}`}
          key={index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <div className="project-header">
            <div>
              <h3>{exp.company}</h3>
              <p className="project-role">{exp.role}</p>
              <p className="project-location">{exp.location}</p>
            </div>
            <span className="project-dates">{exp.dates}</span>
          </div>

          <div className="project-tags">
            {exp.tags.map((tag) => (
              <span className="project-pill" key={tag}>{tag}</span>
            ))}
          </div>

          <ul>
            {exp.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </section>
  );
};

export default Project;
