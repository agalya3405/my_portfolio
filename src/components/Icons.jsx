function IconBase({ children, label }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img" aria-label={label}>
      {children}
    </svg>
  )
}

export function GitHubIcon() {
  return (
    <IconBase label="GitHub icon">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.21-.25-4.53-1.11-4.53-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.39.2 2.42.1 2.67.64.71 1.02 1.61 1.02 2.7 0 3.83-2.33 4.67-4.55 4.92.36.31.69.93.69 1.88v2.78c0 .26.17.58.69.48A10 10 0 0 0 12 2Z"
      />
    </IconBase>
  )
}

export function LinkedInIcon() {
  return (
    <IconBase label="LinkedIn icon">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.93v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22 2H2a.99.99 0 0 0-1 1v18a.99.99 0 0 0 1 1h20a.99.99 0 0 0 1-1V3a.99.99 0 0 0-1-1Z"
      />
    </IconBase>
  )
}

export function LeetCodeIcon() {
  return (
    <IconBase label="LeetCode icon">
      <path
        fill="currentColor"
        d="m9.3 12.1 5.05-5.05 1.4 1.42-4.38 4.38 4.38 4.38-1.4 1.42-5.05-5.05a1 1 0 0 1 0-1.5Zm-3.88.75h12.5v-2H5.42l2.4-2.4L6.4 6.94 2 11.35a1 1 0 0 0 0 1.41l4.4 4.41 1.41-1.41-2.39-2.41Z"
      />
    </IconBase>
  )
}

export function HackerRankIcon() {
  return (
    <IconBase label="HackerRank icon">
      <path
        fill="currentColor"
        d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.35 7 3.89v7.52l-7 3.89-7-3.89V8.24l7-3.89Zm-2.5 4.4h2v2.5h2.5v2h-2.5v2.5h-2v-2.5H7.5v-2h2V8.75Z"
      />
    </IconBase>
  )
}

export function EmailIcon() {
  return (
    <IconBase label="Email icon">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.6l8 5.2 8-5.2V7H4Zm16 8.9V9.2l-7.45 4.84a1 1 0 0 1-1.1 0L4 9.2v6.7h16Z"
      />
    </IconBase>
  )
}

export function CodingIcon() {
  return (
    <IconBase label="Coding profiles icon">
      <path
        fill="currentColor"
        d="M9.2 7.4 4.6 12l4.6 4.6-1.4 1.4L1.8 12l6.6-6.6 0.8 0Zm5.6 0 1.4 1.4-4.6 4.6 4.6 4.6-1.4 1.4L8.2 12l6.6-6.6Z"
      />
    </IconBase>
  )
}
