const items = [
  "Participated in coding, project and hackathon activities.",
  "Developed academic projects using modern web technologies.",
  "Continuously improving programming and problem-solving skills."
];

export default function Achievements() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <p className="eyebrow">Milestones</p>
        <h1>Achievements</h1>
        <div className="achievement-list">
          {items.map((item, index) => (
            <article className="achievement" key={item}>
              <div className="achievement-icon">✓</div>
              <div>
                <span>Achievement {index + 1}</span>
                <p>{item}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
