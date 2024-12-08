import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Follow us on your favorite social media platforms! We&apos;ll follow you back! 😊</h3>
            <div className="social-links">
              {/* Reddit */}
              <a 
                href="https://www.reddit.com/user/nufriends_app/"  // Update with your Reddit link
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Image
                  src="/reddit-logo.svg"
                  alt="Reddit"
                  width={24}
                  height={24}
                />
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@nufriends.app"
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Image
                  src="/tiktok-logo.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/nufriends.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Image
                  src="/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCCud5KMy_xe7smlF-OdYkPg"
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Image
                  src="/youtube-icon.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:justin@nufriends.app">justin@nufriends.app</a></li>
              </ul>
            </div>
  
            {/* Legal Links */}
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="footer-bottom">
          <p className="cookie-notice">
              Note: nufriends is only available in the US for now. Let us know if you sign up from outside the US and we will add you to the waitlist for international launch! The more users we have interest from, the sooner we will expand, so please sign up!
            </p>
            <p className="cookie-notice">
              This site uses cookies. By continuing to use this website, you agree to their use.
              <a href="/cookies"> Learn More</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }