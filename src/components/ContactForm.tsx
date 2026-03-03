'use client'

import { useState, useCallback, type FormEvent } from 'react'

interface FieldErrors {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
      const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
      const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

      const newErrors: FieldErrors = {
        name: name.length > 0 ? '' : 'Name is required.',
        email: emailOk ? '' : 'A valid email is required.',
        message: message.length > 0 ? '' : 'Message is required.',
      }

      setErrors(newErrors)

      if (newErrors.name || newErrors.email || newErrors.message) return

      const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
      window.location.href = `mailto:contact@chaddytwiceover.com?subject=${subject}&body=${body}`
    },
    []
  )

  const clearError = useCallback((field: keyof FieldErrors) => {
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }, [])

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
          className={errors.name ? 'invalid' : ''}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onInput={() => clearError('name')}
        />
        {errors.name && (
          <span id="name-error" className="form-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          inputMode="email"
          required
          className={errors.email ? 'invalid' : ''}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onInput={() => clearError('email')}
        />
        {errors.email && (
          <span id="email-error" className="form-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          className={errors.message ? 'invalid' : ''}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onInput={() => clearError('message')}
        />
        {errors.message && (
          <span id="message-error" className="form-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>
      <button type="submit" className="cta-button">
        Send Message
      </button>
      <p className="form-note">{'// Submitting opens your email client via mailto'}</p>
    </form>
  )
}
