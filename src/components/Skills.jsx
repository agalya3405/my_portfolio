import '../styles.css'

const groups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL'],
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
