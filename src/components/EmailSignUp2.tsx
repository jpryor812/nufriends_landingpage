// components/EmailSignup.tsx
export default function EmailSignup2() {
    return (
      <div className="signup-container">
        <p className="signup-subtitle">Join The Waitlist</p>
        
        <form className="signup-form">
          <input
            type="email"
            placeholder="Enter your email..."
            className="email-input"
            required
          />
          <button type="submit" className="signup-button">
            Save My Spot
          </button>
        </form>
      </div>
    )
  }