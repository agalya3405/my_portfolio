import '../styles.css'

const certs = [
  {
    title: 'NPTEL Elite Certification',
    detail: 'The Joy of Computing Using Python · 86%',
  },
  {
    title: 'Special Lab Award',
    detail: 'Awarded among 21,919 learners.',
  },
  {
    title: 'Problem Solving',
    detail: 'Regular practice on LeetCode and HackerRank in Java and C++; participated in coding contests.',
  },
]

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-heading">
        <p className="eyebrow">Certifications</p>
        <h2>Recognized for dedication and academic excellence.</h2>
      </div>

      <div className="cert-grid">
        {certs.map((cert) => (
          <article key={cert.title} className="glass-card cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
