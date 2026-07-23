import '../styles.css'

const projects = [
  {
    title: 'Smart Campus Management System',
    description:
      'A comprehensive platform for managing campus activities, users, and workflows with a polished user experience.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/agalya3405',
  },
  {
    title: 'Console Applications',
    description:
      'A collection of problem-solving console apps focused on core programming concepts and efficient logic.',
    stack: ['C++', 'Java', 'Data Structures'],
    github: 'https://github.com/agalya3405',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio built with React and Vite to present projects, skills, and professional experience.',
    stack: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/agalya3405',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work built with clarity and purpose.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="glass-card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
