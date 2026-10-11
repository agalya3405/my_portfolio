import '../styles.css'

const projects = [
  {
    title: 'Full-Stack Quiz Application',
    description:
      'Spring Boot backend exposing REST APIs for quiz selection, answer submission, score calculation and answer review. Category and difficulty-based quizzes with attempt history are consumed by a React.js frontend. Questions and attempts are stored in PostgreSQL using Spring Data JPA and Hibernate.',
    stack: ['Spring Boot', 'Java', 'REST APIs', 'PostgreSQL', 'Spring Data JPA', 'Hibernate', 'React.js', 'JavaScript'],
    github: 'https://github.com/agalya3405',
    demo: '',
    featured: true,
  },
  {
    title: 'Green Campus Innovation Portal',
    description:
      'Workflow and approval management system that replaced manual idea tracking with rule-based approval across multiple user roles. Designed the MySQL database for users, submissions and project status, and implemented role-based access control.',
    stack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/agalya3405',
    demo: '',
  },
  {
    title: 'Developer Portfolio Website',
    description:
      'Responsive portfolio deployed on Vercel with an EmailJS contact form that handles inquiries automatically.',
    stack: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/agalya3405',
    demo: 'https://my-portfolio-steel-chi-63.vercel.app/',
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
          <article key={project.title} className={`glass-card project-card ${project.featured ? 'project-card-featured' : ''}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : (
                <button type="button" className="project-link-todo" disabled title="TODO: add demo URL">
                  Live Demo · TODO
                </button>
              )}
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
