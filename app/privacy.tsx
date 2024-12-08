// app/privacy/page.tsx
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <main>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-8 text-gray-700">
            
            {/* Last Updated */}
            <p className="text-sm text-gray-500">Last Updated: December 8, 2024</p>

            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>
                NuFriends ("we", "us", "our") operates nufriends.app and maintains a presence on various social media platforms. 
                This policy explains how we handle your data across all our platforms.
              </p>
            </section>

            {/* Data Collection */}
            <section id="data-collection">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection and Usage</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Website Data</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Email Addresses</strong>: Collected when you join our waitlist</li>
                <li><strong>Analytics</strong>: Through Vercel Analytics, we track basic usage data (page views, visit duration)</li>
                <li><strong>Technical Information</strong>: Browser type, device information, and IP address</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">Social Media Data</h3>
              <p>We maintain presence on:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>TikTok (@nufriends.app)</li>
                <li>Instagram (@nufriends.app)</li>
                <li>YouTube</li>
                <li>Reddit (r/nufriends)</li>
              </ul>
              <p className="mt-4">
                When you interact with our social media:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>These platforms collect data according to their own privacy policies</li>
                <li>We may receive aggregate analytics about engagement with our content</li>
                <li>Direct messages or comments may be stored for communication purposes</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Usage</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Essential Cookies</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enable basic website functionality</li>
                <li>Cannot be disabled</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Analytics Cookies</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Used by Vercel Analytics</li>
                <li>Track page views and site performance</li>
                <li>Can be controlled through browser settings</li>
              </ul>
            </section>

            {/* Accessibility */}
            <section id="accessibility">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Our Commitment</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>We strive for WCAG 2.1 Level AA compliance where applicable</li>
                <li>All essential features are keyboard-accessible</li>
                <li>Screen reader compatibility is maintained</li>
                <li>Color contrast meets accessibility standards</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Known Limitations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Some third-party content may have accessibility limitations</li>
                <li>Social media platforms have their own accessibility features and limitations</li>
              </ul>
            </section>

            {/* Contact & Rights */}
            <section id="contact">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact & Rights</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email: <a href="mailto:justin@nufriends.app" className="text-blue-500 hover:text-blue-600">justin@nufriends.app</a></li>
                <li>You can request data access or deletion</li>
                <li>You can opt out of communications</li>
                <li>Response time: Within 2 business days</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}