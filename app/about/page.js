export default function About() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <p className="eyebrow">About Me</p>
        <h1>About</h1>
        <p className="lead">
          I am a Computer Science Engineering student interested in software
          development, problem solving and modern web technologies.
        </p>

        <div className="info-grid">
          <article className="card">
            <h3>Profile</h3>
            <p>
              I enjoy learning by creating practical applications and improving
              my programming skills through projects and coding practice.
            </p>
          </article>
          <article className="card">
            <h3>Interests</h3>
            <p>
              Web development, Java, data structures, UI design, IoT and
              technology-based solutions.
            </p>
          </article>
          <article className="card">
            <h3>Career Goal</h3>
            <p>
              To grow as a software engineer and contribute to useful,
              user-friendly technology products.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
