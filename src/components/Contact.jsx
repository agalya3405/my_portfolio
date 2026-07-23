import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles.css'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  isEmailJsConfigured,
} from '../config/emailjs'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    if (!isEmailJsConfigured) {
      setStatus({
        type: 'error',
        message: 'Add your EmailJS Service ID, Template ID, and Public Key in src/config/emailjs.js.',
      })
      return
    }

    try {
      setIsSending(true)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          message: formState.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      setFormState({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong while sending the message. Please try again.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something meaningful.</h2>
      </div>

      <div className="contact-grid">
        <form className="glass-card contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your idea"
              rows="5"
              required
            />
          </label>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
        </form>

        <div className="glass-card contact-side">
          <h3>Get in touch</h3>
          <p>
            Open to internship opportunities, collaborations, and exciting frontend/backend work.
          </p>
          <div className="contact-links">
            <a href="mailto:agalya5566@gmail.com">agalya5566@gmail.com</a>
            <a href="https://github.com/agalya3405" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/agalya-s-b356472b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/agalya5566/" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
