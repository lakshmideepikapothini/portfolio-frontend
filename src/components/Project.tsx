import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    company: 'Advithri Technologies',
    location: 'Client: Walmart, Sunnyvale, CA',
    role: 'Full-Stack Software Engineer',
    dates: 'June 2025 – Present',
    tags: ['Java 17', 'Spring Boot', 'React', 'AWS', 'AI/ML'],
    bullets: [
      'Designed and developed Java 17 Spring Boot microservices exposing REST APIs and integrated AWS Lambda, API Gateway, DynamoDB, SQS, SNS, CloudWatch, and ECS for scalable cloud-native applications.',
      'Developed Node.js microservices and optimized backend performance using Redis caching and load balancing techniques.',
      'Integrated React frontend applications with Java-based backend services using REST and GraphQL APIs.',
      'Built AI-assisted engineering tools using Python, TensorFlow, and Scikit-learn to automate performance analysis and improve developer productivity.',
      'Built Generative AI solutions using Amazon Bedrock, LangChain, LLMs, RAG, Python, and OpenAI APIs for intelligent search, retrieval, and developer assistance.',
      'Implemented secure authentication and authorization using Spring Security, OAuth 2.0, JWT, AWS IAM, and API Gateway.',
      'Automated cloud infrastructure provisioning using Terraform, AWS CloudFormation, Docker, Kubernetes, and Jenkins.',
      'Optimized Oracle and DynamoDB performance through SQL tuning, indexing, partitioning, query optimization, and schema design.',
    ],
  },
  {
    company: 'Advithri Technologies',
    location: 'Client: WillowTree, TELUS, Fairfax, VA',
    role: 'Full-Stack Developer',
    dates: 'Sept 2024 – May 2025',
    tags: ['Java 17', 'Spring Boot', 'React', 'Kafka', 'AWS'],
    bullets: [
      'Developed backend applications using Java 17, Spring Boot, Hibernate, Oracle, PostgreSQL, and REST APIs, optimizing enterprise business workflows.',
      'Designed RESTful web services using Spring Boot and integrated them with React frontend applications.',
      'Built scalable integration services using Apache Kafka, Spring Boot microservices, REST APIs, AWS SQS, and SNS.',
      'Deployed containerized microservices using Docker, Kubernetes (EKS), AWS ECS, CloudWatch, IAM, and Terraform.',
      'Implemented CI/CD pipelines using Jenkins and developed unit and integration tests using JUnit, Mockito, and Jest.',
    ],
  },
  {
    company: 'Advithri Technologies',
    location: 'Internship',
    role: 'Front End Developer',
    dates: 'Aug 2023 – Dec 2024',
    tags: ['React.js', 'TypeScript', 'HTML5', 'CSS3'],
    bullets: [
      'Developed responsive and user-friendly web applications using React.js, JavaScript, HTML5, CSS3, and TypeScript.',
      'Built reusable React components using React Hooks to improve maintainability and code reusability.',
      'Integrated frontend applications with RESTful APIs and collaborated with backend developers for seamless implementation.',
      'Implemented responsive UI designs and optimized pages for cross-browser compatibility and mobile responsiveness.',
    ],
  },
  {
    company: 'Zensar Technologies',
    location: 'Financial Services Client, Bangalore, India',
    role: 'Software Engineer',
    dates: 'Jan 2021 – July 2022',
    tags: ['Java', 'Spring Boot', 'ReactJS', 'AWS'],
    bullets: [
      'Developed enterprise applications using Java, Spring Boot, ReactJS, and Redux.',
      'Designed and implemented RESTful APIs using Spring Boot following microservices architecture.',
      'Developed backend services using Spring Data JPA, Hibernate, and MongoDB.',
      'Integrated AWS services including Lambda, API Gateway, SQS, SNS, S3, CloudWatch, IAM, and DynamoDB.',
      'Implemented CI/CD pipelines using Jenkins, Docker, Kubernetes, Terraform, Git, Maven, and SonarQube.',
      'Performed unit testing using JUnit, Mockito, and frontend testing using Jest.',
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
