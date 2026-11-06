const projects = [
  {
    title: "Public Grievance & Civic Issue Reporting System",
    description: "A responsive platform where citizens can submit civic complaints, attach details and track complaint progress.",
    tech: ["Next.js", "React", "JavaScript", "CSS"]
  },
  {
    title: "Smart Wearable for Visually Impaired",
    description: "An assistive technology concept using sensors, GPS and voice guidance to help with navigation and object awareness.",
    tech: ["IoT", "ESP32", "Sensors", "GPS"]
  },
  {
    title: "Personal Portfolio",
    description: "A professional portfolio website presenting profile, skills, projects, education and achievements.",
    tech: ["Next.js", "React", "CSS"]
  }
];

export default function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">My Work</p>
        <h1>Projects</h1>
        <p className="lead">A collection of projects and ideas I have worked on.</p>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-large" key={project.title}>
             <div className="number">
             {String(index + 1).padStart(2, "0")}</div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="button-row">
                  <a href="#" className="btn secondary">GitHub</a>
                  <a href="#" className="btn primary">Live Demo</a>
                </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
