// components/EmailSignup.tsx
export default function EmailSignup() {
    return (
      <div className="signup-container">
        <h2 className="signup-title">Never Feel Alone Again</h2>
        <p className="signup-subtitle">Join The Waitlist!</p>
        
        <form className="signup-form">
          <input
            type="email"
            placeholder="Enter your email..."
            className="email-input"
            required
          />
          <button type="submit" className="signup-button">
            Save My Spot!!
          </button>
        </form>
      </div>
    )
  }