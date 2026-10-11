import '../styles.css'

const education = [
  {
    qualification: 'B.Tech Information Technology',
    institution: 'Bannari Amman Institute of Technology',
    period: '2023–Present',
    result: 'CGPA: 8.11/10',
  },
  {
    qualification: 'HSC',
    institution: 'Royal Matric Hr. Sec. School',
    period: '2021–2023',
    result: '89.5%',
  },
]

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Building a strong foundation for thoughtful engineering.</h2>
      </div>

      <div className="cert-grid">
        {education.map((item) => (
          <article key={item.qualification} className="glass-card cert-card">
            <h3>{item.qualification}</h3>
            <p>{item.institution}</p>
            <p>{item.period} · {item.result}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
