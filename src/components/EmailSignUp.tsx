// components/EmailSignup.tsx
export default function EmailSignup() {
    return (
      <div className="signup-container">
        <h2 className="signup-title">Never Feel Alone Again</h2>
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
        <p className="signup-disclaimer">We are in final stages of testing and hope to launch in December. Sign up for the waitlist to be notified of our launch and receveie exclusive perks!</p>
      </div>
    )
  }