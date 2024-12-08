'use client'
import { useState } from 'react'

export default function EmailSignup2() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Failed to send email')
      
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="signup-container">
      <p className="signup-title">Join The Waitlist!</p>
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email..."
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="signup-button"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Saving...' : 'Save My Spot!!'}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-green-500 mt-2">Thanks for joining our waitlist! Check your email for more information!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}

      <p className="signup-disclaimer">
        We are in final stages of testing and hope to launch by late December. Sign up for the waitlist to be notified of our launch and receive exclusive ~founding member~ perks!
      </p>
    </div>
  )
}