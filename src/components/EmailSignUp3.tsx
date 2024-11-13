// components/EmailSignup.tsx
export default function EmailSignup3() {
    return (
      <div className="signup-container">
        <p className="signup-subtitle">Find Your New Friends!</p>
        
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