import '../styles.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Analytical thinking grounded in practical development.</h2>
      </div>

      <div className="about-grid">
        <article className="glass-card about-card">
          <h3>Profile</h3>
          <p>
            B.Tech Information Technology undergraduate with a Python foundation
            (NPTEL Elite certified, 86%), strong problem-solving skills, and
            hands-on experience building data-driven applications with SQL
            databases and REST APIs.
          </p>
        </article>

        <article className="glass-card about-card">
          <h3>Relevant strengths</h3>
          <p>
            Built quiz-evaluation logic covering answer submission, score
            calculation, and answer review. Basic knowledge of Large Language
            Models and prompt engineering.
          </p>
        </article>

      </div>
    </section>
  )
}

export default About
