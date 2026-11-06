const skills = [
  ["Java", "Programming & OOP", 45],
  ["C / C++", "Programming fundamentals", 60],
  ["JavaScript", "Web development", 65],
  ["React", "Component-based UI", 60],
  ["Next.js", "Full-stack React framework", 65],
  ["HTML & CSS", "Responsive web design", 45],
  ["DSA", "Problem solving", 50]
];

export default function Skills() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">My Toolkit</p>
        <h1>Skills</h1>
        <p className="lead">
          Technologies and tools I am learning and using in projects.
        </p>

        <div className="skill-grid">
          {skills.map(([name, desc, percentage]) => (
            <article className="skill-card" key={name}>
              <div className="skill-heading">
                <h3>{name}</h3>
                <span>{percentage}%</span>
              </div>

              <div className="skill-bar">
                <span style={{ width: `${percentage}%` }}></span>
              </div>

              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}