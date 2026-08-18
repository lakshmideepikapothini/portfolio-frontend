const Experience = () => {
  const focusAreas = [
    "Designing and scaling modern frontend architecture for ambitious product teams.",
    "Building AI-enabled workflows that improve developer productivity and product intelligence.",
    "Shipping resilient, cloud-integrated systems with strong observability and performance discipline.",
  ];

  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="section-eyebrow">Professional experience</p>
        <h2>From frontend systems to AI-assisted delivery</h2>
        <p>
          I bring a blend of product engineering, cloud integration, and AI experimentation to every engagement. My work spans high-scale web applications, developer tooling, and intelligent automation systems that improve how teams build and operate software.
        </p>
      </div>

      <div className="experience-card">
        <div className="experience-grid">
          <div>
            <h3>What I focus on</h3>
            <ul className="experience-bullets">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Core strengths</h3>
            <ul className="experience-bullets">
              <li>React, React Native, TypeScript, and Node.js</li>
              <li>Agentic AI systems with LangChain, LlamaIndex, and OpenAI APIs</li>
              <li>Cloud-native delivery with AWS, CI/CD, and monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
