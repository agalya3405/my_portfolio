import '../styles.css'
import { GitHubIcon, HackerRankIcon, LeetCodeIcon } from './Icons'

const profiles = [
  {
    name: 'LeetCode',
    description: 'Practice problem solving and algorithmic thinking through consistent coding challenges.',
    url: 'YOUR_LEETCODE_URL',
    Icon: LeetCodeIcon,
  },
  {
    name: 'HackerRank',
    description: 'Track skill growth across programming, data structures, and interview preparation.',
    url: 'YOUR_HACKERRANK_URL',
    Icon: HackerRankIcon,
  },
  {
    name: 'GitHub',
    description: 'Explore projects, experiments, and code samples that show practical development work.',
    url: 'YOUR_GITHUB_URL',
    Icon: GitHubIcon,
  },
]

function CodingProfiles() {
  return (
    <section className="section" id="coding-profiles">
      <div className="section-heading">
        <p className="eyebrow">Coding Profiles</p>
        <h2>Places where I practice, build, and keep learning.</h2>
      </div>

      <div className="profiles-grid">
        {profiles.map(({ name, description, url, Icon }) => (
          <article key={name} className="glass-card profile-card profile-card-grid">
            <div className="profile-icon-wrap" aria-hidden="true">
              <Icon />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="profile-visit" href={url} target="_blank" rel="noreferrer">
              Visit Profile
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CodingProfiles
