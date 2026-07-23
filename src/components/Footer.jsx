import '../styles.css'
import { EmailIcon, GitHubIcon, HackerRankIcon, LeetCodeIcon, LinkedInIcon } from './Icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>© 2026 Agalya S. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>

      <div className="footer-socials" aria-label="Social links">
        <a href="https://github.com/agalya3405" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/agalya-s-b356472b9/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a href="https://leetcode.com/u/agalya5566/" target="_blank" rel="noreferrer" aria-label="LeetCode">
          <LeetCodeIcon />
        </a>
        <a href="YOUR_HACKERRANK_URL" target="_blank" rel="noreferrer" aria-label="HackerRank">
          <HackerRankIcon />
        </a>
        <a href="mailto:agalya5566@gmail.com" aria-label="Email">
          <EmailIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
