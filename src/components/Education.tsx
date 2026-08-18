const entries = [
  {
    title: "Master of Science",
    meta: "Southern Arkansas University • 2022 - 2024",
    text: "Computers & Information Science with a strong focus on software engineering, systems thinking, and applied computing.",
  },
  {
    title: "Bachelor of Technology",
    meta: "SSSISE • 2017 - 2021",
    text: "Computer Science & Engineering with hands-on exposure to programming, data structures, and full-stack development.",
  },
  {
    title: "Secondary Education",
    meta: "NRI • 2015 - 2017",
    text: "Completed MPC studies with a strong academic foundation and early interest in technology and problem solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="section-eyebrow">Education</p>
        <h2>Academic foundation and continuous growth</h2>
      </div>

      <div className="timeline-list">
        {entries.map((entry) => (
          <div className="timeline-item" key={entry.title}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <h3>{entry.title}</h3>
              <p className="meta">{entry.meta}</p>
              <p>{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
