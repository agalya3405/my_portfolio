import '../styles.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <span className="hero-badge">OPEN TO INTERNSHIPS</span>
        <p className="eyebrow">Software Developer | Problem Solver | DSA Enthusiast</p>
        <h1>Hi, I&apos;m AGALYA S</h1>
        <p className="hero-text">
          Information Technology undergraduate passionate about software development,
          problem solving, and building efficient web applications. I enjoy
          transforming ideas into reliable software using modern technologies.
        </p>

        <div className="hero-meta-line">
          <span>CGPA: 8.09</span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="/resume.pdf" download>
            Download Resume
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
          <span>✔ 300+ DSA Problems Solved</span>
          <span>✔ React Projects</span>
          <span>✔ NPTEL Elite Certified</span>
          <span>✔ Special Lab Award Recipient</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
