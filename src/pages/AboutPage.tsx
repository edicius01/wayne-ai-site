import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { BackToTop } from '../components/BackToTop';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
              About Wayne AI
            </h1>
            <p className="text-xl text-[#374151]">
              Built by someone who understands the missed call problem - because I've watched it cost businesses thousands.
            </p>
          </div>

          <div className="space-y-12">
            {/* Story Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">The Problem I Saw</h2>
              <div className="space-y-4 text-[#374151]">
                <p>
                  I've spent years working with home service businesses - plumbers, HVAC techs, electricians - helping them automate and grow. 
                  And I kept seeing the same problem over and over:
                </p>
                <p className="text-lg font-semibold text-[#f97316]">
                  They were losing thousands of dollars every month to missed calls.
                </p>
                <p>
                  Not because they didn't want the work. Not because they weren't good at what they do. 
                  But because they were under a sink, driving to a job, or it was 7 PM on a Saturday.
                </p>
                <p>
                  Meanwhile, their competitors who answered faster got the job.
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Why I Built Wayne AI</h2>
              <div className="space-y-4 text-[#374151]">
                <p>
                  I knew there had to be a better way. So I started building.
                </p>
                <p>
                  Not another "chatbot" that sounds like a robot. Not another tool that requires a PhD to set up. 
                  Not another monthly subscription that does 10% of what you actually need.
                </p>
                <p className="text-lg font-semibold text-[#0f172a]">
                  I built a complete front office system that works like you hired someone - but better.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Missed calls?</strong> Instant text-back in under 30 seconds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Bookings?</strong> AI qualifies the lead and books them directly into your calendar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Reviews?</strong> Automatic requests that actually get responses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Phone calls?</strong> (Tier 3) AI answers like a real person and handles emergencies correctly.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Local Focus */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Why Local Matters</h2>
              <div className="space-y-4 text-[#374151]">
                <p>
                  I'm based in <span className="font-semibold text-[#0f172a]">Evansville, Indiana</span>, and I built Wayne AI specifically for home service businesses in the{' '}
                  <span className="font-semibold text-[#0f172a]">Evansville, Henderson, and Owensboro</span> area.
                </p>
                <p>
                  Why does that matter? Because I'm not some national call center that doesn't know your market. 
                  I know your customers. I know your competition. I know what works here.
                </p>
                <p className="text-lg font-semibold text-[#f97316]">
                  And if something breaks? You're not calling a 1-800 number in another country. You're texting me.
                </p>
              </div>
            </div>

            {/* How It's Different */}
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-lg p-8 md:p-12 text-white">
              <h2 className="text-2xl font-bold mb-6">How Wayne AI is Different</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We Build It For You</h3>
                    <p className="text-white/80">
                      You don't get a login and a tutorial. We custom-build your entire system, test it, and hand you something that works day one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pricing That Makes Sense</h3>
                    <p className="text-white/80">
                      No hidden fees. No per-text charges that add up to $500/month. Flat monthly rate. Everything included.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">White-Glove Support</h3>
                    <p className="text-white/80">
                      When you need help, you get me - not a ticket system. Text, call, or email. Real human. Fast response.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-[#f97316]">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">My Mission</h2>
              <p className="text-xl text-center text-[#374151] mb-6">
                Help local home service businesses stop losing revenue to missed calls - 
                so they can focus on the work they're actually good at.
              </p>
              <p className="text-center text-[#374151]">
                If you're tired of watching leads walk out the door because you couldn't answer fast enough, let's talk.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Want to See How It Works?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Book a 15-minute call. I'll show you the system live with your actual phone number.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="inline-block bg-white text-[#f97316] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Book a Demo
                </a>
                <a
                  href="tel:8884336516"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-200 border-2 border-white/40"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call/Text Now
                </a>
              </div>
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
