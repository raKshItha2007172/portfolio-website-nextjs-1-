import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>NexaCode</h3>
          <p>Designed and developed with passion.</p>
        </div>
        <div className="footer-links">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
