
"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // This function handles the form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Thank you! Your message has been submitted.");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="page-section">
      <div className="container contact-grid">

        <div>
          <p className="eyebrow">Let's Talk</p>
          <h1>Contact Me</h1>

          <p className="lead">
            If you have an internship opportunity, project idea
            or collaboration, feel free to reach out.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:rakshitha@gmail.com">
                rakshitha@gmail.com
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/your-username/"
                 target="_blank"
                 rel="noopener noreferrer">
                Visit My LinkedIn
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/your-username"
                 target="_blank"
                 rel="noopener noreferrer">
                Visit My GitHub
              </a>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Write your message"
              required
            />
          </div>

          <button className="btn primary" type="submit">
            Send Message
          </button>

          {status && (
            <p className="form-status">{status}</p>
          )}

        </form>
      </div>
    </section>
  );
}
