// components/EmailSignup.tsx
export default function EmailSignup2() {
    return (
      <div className="signup-container">
        <p className="signup-title">Join The Waitlist!</p>
        
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
        <p className="signup-disclaimer">We are in final stages of testing and hope to launch by late December. Sign up for the waitlist to be notified of our launch and receive exclusive ~founding member~ perks!</p>
      </div>
    )
  }