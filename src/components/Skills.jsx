import '../styles.css'

const groups = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'C++'],
  },
  {
    title: 'Generative AI (Basic)',
    items: ['LLMs', 'Prompt Engineering'],
  },
  {
    title: 'Analytical',
    items: ['Problem Solving', 'Data Structures & Algorithms', 'Structured Data Handling'],
  },
  {
    title: 'Data & Databases',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'Relational Database Design', 'DBMS'],
  },
  {
    title: 'Development',
    items: ['Spring Boot', 'REST APIs', 'PHP', 'React.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Focused on modern development practices.</h2>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title} className="glass-card skill-card">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
