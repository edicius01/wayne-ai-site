import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { BackToTop } from '../components/BackToTop';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#374151] mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Introduction</h2>
              <p className="text-[#374151] mb-4">
                Wayne AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our AI-powered receptionist and communication systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#374151] mb-4">
                <li><strong>Contact Information:</strong> Name, business name, phone number, email address, and physical address</li>
                <li><strong>Business Information:</strong> Service area, trade/industry, calendar access, and business hours</li>
                <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through third-party payment processors)</li>
                <li><strong>Communication Data:</strong> Text messages, call logs, and customer interaction records</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li><strong>Usage Data:</strong> How you interact with our service, including features used and actions taken</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your experience and analyze service usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li>Provide and maintain our AI receptionist and automation services</li>
                <li>Send automated text messages and call responses on your behalf</li>
                <li>Schedule appointments and manage your calendar</li>
                <li>Process payments and send billing statements</li>
                <li>Send service updates, technical notices, and support messages</li>
                <li>Improve our services through data analysis and user feedback</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">SMS/Text Messaging (A2P Compliance)</h2>
              <div className="bg-[#f97316]/10 border-2 border-[#f97316] rounded-lg p-6 mb-4">
                <p className="font-semibold text-[#0f172a] mb-2">Important: Message Consent Requirements</p>
                <p className="text-[#374151]">
                  By using Wayne AI's text messaging services, you authorize us to send text messages on your behalf to your customers. Your customers must consent to receive text messages from your business before we send any communications.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Customer Text Message Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li>Customers can opt-out anytime by texting STOP, UNSUBSCRIBE, or CANCEL</li>
                <li>Message frequency varies based on customer interactions and appointments</li>
                <li>Message and data rates may apply</li>
                <li>We never sell or share customer phone numbers with third parties for marketing</li>
                <li>Help is available by texting HELP or calling 888-433-6516</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Information Sharing and Disclosure</h2>
              <p className="text-[#374151] mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our services (e.g., SMS providers, payment processors, calendar integrations)</li>
                <li><strong>Business Partners:</strong> GoHighLevel and other platforms we integrate with to provide our services</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Data Security</h2>
              <p className="text-[#374151] mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-[#374151] mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Your Rights and Choices</h2>
              <p className="text-[#374151] mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="text-[#374151] mt-4">
                To exercise these rights, contact us at <a href="mailto:wayne@wayneai.net" className="text-[#f97316] hover:underline">wayne@wayneai.net</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Children's Privacy</h2>
              <p className="text-[#374151]">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#374151]">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our service. Your continued use of Wayne AI after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Contact Us</h2>
              <p className="text-[#374151] mb-4">
                If you have questions about this Privacy Policy or our data practices, contact us:
              </p>
              <div className="bg-[#F8F9FA] rounded-lg p-6 space-y-2">
                <p className="text-[#0f172a]"><strong>Wayne AI</strong></p>
                <p className="text-[#374151]">Email: <a href="mailto:wayne@wayneai.net" className="text-[#f97316] hover:underline">wayne@wayneai.net</a></p>
                <p className="text-[#374151]">Phone: <a href="tel:8884336516" className="text-[#f97316] hover:underline">888-433-6516</a></p>
                <p className="text-[#374151]">Location: Evansville, Indiana</p>
              </div>
            </section>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">A2P 10DLC Compliance Statement</h3>
              <p className="text-green-800">
                Wayne AI is registered as an Application-to-Person (A2P) messaging provider and complies with carrier requirements for 10DLC messaging. We maintain proper consent records and honor all opt-out requests immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
