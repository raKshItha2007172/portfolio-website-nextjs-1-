"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setDark(false);
    } else {
      document.documentElement.classList.remove("light");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Education", "/education"],
    ["Achievements", "/achievements"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">My<span>Portfolio</span></Link>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
