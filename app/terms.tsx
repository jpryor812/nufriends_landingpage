// app/terms/page.tsx
import Link from 'next/link'

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="space-y-8 text-gray-700">
            
            <p className="text-sm text-gray-500">Last Updated: December 8, 2024</p>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p>
                NuFriends provides a waitlist signup service for our upcoming social platform 
                designed to help users build meaningful friendships. By using our service, you 
                agree to join our waitlist and receive updates about our launch and features.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service is currently available only in the United States</li>
                <li>Users must be 13 years or older to join the waitlist</li>
                <li>Users are required to provide valid contact information</li>
                <li>Only one waitlist signup is permitted per person</li>
              </ul>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
              <p>By using our service, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Use the service for legitimate purposes only</li>
                <li>Not attempt to manipulate or abuse the waitlist system</li>
                <li>Accept communications about our launch and service updates</li>
              </ul>
            </section>

            {/* Our Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Rights</h2>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Modify these terms at any time</li>
                <li>Change or discontinue any aspect of our service</li>
                <li>Remove users from the waitlist for violation of terms</li>
                <li>Limit waitlist size at our discretion</li>
                <li>Modify launch timeline and service features</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The service is provided &quot;as is&quot; without warranties of any kind</li>
                <li>We make no guarantees about launch timeline or final feature set</li>
                <li>We are not responsible for any damages arising from use of our service</li>
                <li>We reserve the right to modify or terminate the service at any time</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:justin@nufriends.app" className="text-blue-500 hover:text-blue-600">
                  justin@nufriends.app
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}