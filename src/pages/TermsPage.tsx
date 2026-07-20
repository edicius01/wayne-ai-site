import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { BackToTop } from '../components/BackToTop';

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service | Wayne AI</title>
        <meta name="description" content="Terms of service for Wayne AI's automation, lead capture, and booking services for local service businesses." />
        <link rel="canonical" href="https://wayneai.net/terms" />
        <meta property="og:url" content="https://wayneai.net/terms" />
      </Helmet>
      <Navigation />

      <div className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-[#374151] mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Agreement to Terms</h2>
              <p className="text-[#374151] mb-4">
                These Terms of Service ("Terms") govern your use of the services provided by Wayne AI ("we," "our," or "us"), including our website at wayneai.net, our AI-powered lead capture, follow-up, and booking systems, and any related services (collectively, the "Services"). By using the Services, you agree to these Terms. If you do not agree, do not use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">The Services</h2>
              <p className="text-[#374151] mb-4">
                Wayne AI provides automation services for local service businesses, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li>Automated text-back responses to missed calls</li>
                <li>AI-powered lead qualification and follow-up via text, chat, and voice</li>
                <li>Appointment scheduling and calendar management</li>
                <li>Review requests and customer reactivation campaigns</li>
                <li>Lead capture forms, landing pages, and related marketing systems</li>
              </ul>
              <p className="text-[#374151] mt-4">
                The specific services included in your plan are described at the time of purchase. We may improve, modify, or discontinue features of the Services with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Billing and Cancellation</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li><strong>Month-to-month:</strong> Unless otherwise agreed in writing, Services are billed monthly in advance. There are no long-term contracts.</li>
                <li><strong>Cancellation:</strong> You may cancel at any time by written notice (email is fine). Cancellation takes effect at the end of the current billing cycle. No refunds are issued for partial months.</li>
                <li><strong>Setup fees:</strong> Any one-time setup or onboarding fees are non-refundable once work has begun.</li>
                <li><strong>Non-payment:</strong> We may suspend Services for accounts with overdue balances after reasonable notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Your Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li>Provide accurate business information and keep it current</li>
                <li>Obtain all required consents from your customers before we send messages on your behalf, as described in our <a href="/privacy" className="text-[#f97316] hover:underline">Privacy Policy</a></li>
                <li>Use the Services only for lawful purposes and in compliance with telemarketing, SMS (A2P 10DLC), and consumer-protection regulations applicable to your business</li>
                <li>Respond to leads and appointments the Services generate — we capture and book; you deliver the work</li>
                <li>Keep your account credentials secure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">SMS Messaging Terms (Wayne AI Messaging Program)</h2>
              <p className="text-[#374151] mb-4">
                Wayne AI sends one-to-one SMS text messages to business owners and prospective and current customers in connection with our web design services — sharing a preview website we have built, follow-ups in an ongoing conversation, and appointment or booking notifications.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                <li><strong>Opt-in:</strong> You may receive messages after engaging with us directly (by conversation, phone, web form, or requesting information about our services)</li>
                <li><strong>Opt-out:</strong> Cancel at any time by replying STOP; we will confirm your unsubscribe status and send no further messages. Reply START to rejoin.</li>
                <li><strong>Help:</strong> Reply HELP, or contact <a href="mailto:wayne@wayneai.net" className="text-[#f97316] hover:underline">wayne@wayneai.net</a> or 888-433-6516</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Message and data rates may apply; message frequency varies</li>
                <li>Mobile information and text messaging opt-in data are never shared with third parties for marketing purposes — see our <a href="/privacy" className="text-[#f97316] hover:underline">Privacy Policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Messaging Compliance</h2>
              <p className="text-[#374151] mb-4">
                Messages sent through the Services honor opt-out requests (STOP, UNSUBSCRIBE, CANCEL) immediately. You agree not to use the Services to send unsolicited messages, and you are responsible for the content of campaigns sent on your behalf at your direction. We may refuse or halt any messaging that we reasonably believe violates carrier rules or applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">No Guarantee of Results</h2>
              <p className="text-[#374151] mb-4">
                We build systems that capture and convert leads, but lead volume, booking rates, and revenue depend on factors outside our control — your market, pricing, reputation, and responsiveness. Except for any written guarantee included with your specific plan, the Services are provided "as is" and we do not guarantee specific business results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Intellectual Property</h2>
              <p className="text-[#374151] mb-4">
                We retain all rights to the software, systems, templates, and know-how used to deliver the Services. You retain all rights to your business data, customer lists, and content you provide. On cancellation, you may request an export of your contact and conversation data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Limitation of Liability</h2>
              <p className="text-[#374151] mb-4">
                To the maximum extent permitted by law, Wayne AI's total liability arising out of or related to the Services is limited to the amounts you paid us in the three (3) months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits or lost business opportunities, even if advised of the possibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Termination</h2>
              <p className="text-[#374151] mb-4">
                We may suspend or terminate Services for material breach of these Terms, abusive conduct, or use that creates legal or carrier-compliance risk. Where practical, we will give notice and an opportunity to cure first.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Governing Law</h2>
              <p className="text-[#374151] mb-4">
                These Terms are governed by the laws of the State of Indiana, without regard to conflict-of-law principles. Any disputes will be resolved in the state or federal courts located in Vanderburgh County, Indiana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Changes to These Terms</h2>
              <p className="text-[#374151] mb-4">
                We may update these Terms from time to time. We will notify active clients of significant changes by email. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Contact Us</h2>
              <p className="text-[#374151] mb-4">
                Questions about these Terms? Contact us:
              </p>
              <div className="bg-[#F8F9FA] rounded-lg p-6 space-y-2">
                <p className="text-[#0f172a]"><strong>Wayne AI</strong></p>
                <p className="text-[#374151]">Email: <a href="mailto:wayne@wayneai.net" className="text-[#f97316] hover:underline">wayne@wayneai.net</a></p>
                <p className="text-[#374151]">Phone: <a href="tel:8884336516" className="text-[#f97316] hover:underline">888-433-6516</a></p>
                <p className="text-[#374151]">Call or text: <a href="tel:8126123105" className="text-[#f97316] hover:underline">812-612-3105</a></p>
                <p className="text-[#374151]">Location: Evansville, Indiana</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
