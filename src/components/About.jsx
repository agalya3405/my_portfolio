import '../styles.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Driven by curiosity, quality, and problem solving.</h2>
      </div>

      <div className="about-grid">
        <article className="glass-card about-card">
          <h3>Education</h3>
          <p>
            B.Tech in Information Technology from Bannari Amman Institute of
            Technology, with strong academic performance and a growing passion
            for software engineering.
          </p>
        </article>

        <article className="glass-card about-card">
          <h3>What I enjoy</h3>
          <p>
            I enjoy building backend logic, improving user experience, and
            solving real-world problems through thoughtful code and design.
          </p>
        </article>

        <article className="glass-card about-card">
          <h3>Strengths</h3>
          <p>
            Problem solving, clean UI thinking, consistency, and the ability to
            learn quickly while working on meaningful projects.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
