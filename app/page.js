import Link from "next/link";

const projects = [
  {
    title: "Public Grievance & Civic Issue Reporting",
    text: "A web application for citizens to report civic problems, track complaints and view issue status.",
    tech: "Next.js • React • CSS"
  },
  {
    title: "Smart Wearable for Visually Impaired",
    text: "A smart wearable concept that provides navigation and object guidance using sensors, GPS and regional-language voice assistance.",
    tech: "IoT • Sensors • GPS • AI"
  },
  {
    title: "Personal Portfolio Website",
    text: "A responsive portfolio designed to present skills, projects, education and achievements in one place.",
    tech: "Next.js • React • CSS"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Hello, I'm</p>
            <h1>Rakshitha K Achar</h1>
            <h2>Computer Science Engineering Student <span>|</span> Aspiring Software Engineer</h2>
            <p className="hero-text">
              I am passionate about programming, problem solving, web development
              and building useful projects.
            </p>
            <div className="button-row">
              <Link href="/projects" className="btn primary">View My Projects</Link>
              <Link href="/contact" className="btn secondary">Contact Me</Link>
            </div>
          </div>

          <div className="profile-wrap">
            <div className="profile-circle">
              <img src="/profile.jpg" alt="My Profile" className="profile-photo"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What I Do</p>
            <h2>Skills & Focus</h2>
          </div>
          <div className="card-grid three">
            <article className="card">
              <div className="icon">⌘</div>
              <h3>Programming</h3>
              <p>Java, C, C++, Python and problem-solving fundamentals.</p>
            </article>
            <article className="card">
              <div className="icon">&lt;/&gt;</div>
              <h3>Web Development</h3>
              <p>Next.js, React, JavaScript, HTML and responsive CSS.</p>
            </article>
            <article className="card">
              <div className="icon">✦</div>
              <h3>Projects</h3>
              <p>Building practical student projects and learning through implementation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2>Recent Projects</h2>
            </div>
            <Link href="/projects" className="text-link">View all →</Link>
          </div>

          <div className="card-grid three">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-tag">Project</span>
                  <span>↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <small>{project.tech}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Let's connect</p>
            <h2>Have a project or opportunity?</h2>
            <p>I'd be happy to learn, collaborate and build something useful.</p>
          </div>
          <Link href="/contact" className="btn primary">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
