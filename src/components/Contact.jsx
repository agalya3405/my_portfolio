import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles.css'
import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  isEmailJsConfigured,
} from '../config/emailjs'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [toast, setToast] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setToast({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    if (!isEmailJsConfigured) {
      return
    }

    try {
      setIsSending(true)
      setToast({ type: '', message: '' })
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          message: formState.message,
        },
        { publicKey: PUBLIC_KEY }
      )

      setToast({ type: 'success', message: 'Message sent successfully!' })
      setFormState({ name: '', email: '', message: '' })
    } catch {
      setToast({ type: 'error', message: 'Something went wrong while sending the message. Please try again.' })
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
          <button type="submit" disabled={isSending || !isEmailJsConfigured}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {!isEmailJsConfigured ? (
            <p className="form-note">Contact form is temporarily unavailable. Please email me directly at agalya5566@gmail.com.</p>
          ) : null}
          {toast.message ? <p className={`form-toast ${toast.type}`}>{toast.message}</p> : null}
        </form>

        <div className="glass-card contact-side">
          <h3>Get in touch</h3>
          <p>
            Open to Gen AI Specialist opportunities, internships, collaborations, and full-stack development work.
          </p>
          <div className="contact-links">
            <a href="mailto:agalya5566@gmail.com">agalya5566@gmail.com</a>
            <a href="tel:9042608279">9042608279</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
