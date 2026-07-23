import '../styles.css'

const certs = [
  {
    title: 'The Joy of Computing using Python',
    detail: 'NPTEL Elite Certification • 86%',
  },
  {
    title: 'Special Lab Achievement',
    detail: 'Recognized for supporting 21,919 learners in NPTEL.',
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
