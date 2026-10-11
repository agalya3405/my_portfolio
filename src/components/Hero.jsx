import '../styles.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <span className="hero-badge">OPEN TO INTERNSHIPS</span>
        <p className="eyebrow">B.Tech IT Student</p>
        <h1>B.Tech IT Student | Software Developer | Python &amp; Full-Stack Enthusiast</h1>
        <p className="hero-text">
          I build data-driven applications with Python, SQL databases, REST APIs, and modern
          web technologies, with a strong focus on problem solving and practical software development.
        </p>

        <div className="hero-meta-line">
          <span>CGPA: 8.11/10</span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="/resume/Agalya-S-Resume.pdf" download>
            Download Resume
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/agalya3405" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/agalya-s-b356472b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:agalya5566@gmail.com">Email</a>
        </div>

        <div className="hero-highlights" aria-label="Key highlights">
          <span>✔ Python foundation</span>
          <span>✔ SQL &amp; REST APIs</span>
          <span>✔ NPTEL Elite Certified</span>
          <span>✔ Special Lab Award Recipient</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
