import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { BackToTop } from '../components/BackToTop';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { useState } from 'react';

export function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<'missed-call' | 'web-lead' | 'voice-ai'>('missed-call');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
              See Wayne AI in Action
            </h1>
            <p className="text-xl text-[#374151] max-w-3xl mx-auto">
              Watch how our system responds to missed calls, web leads, and phone calls - all automatically.
            </p>
          </div>

          {/* Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveDemo('missed-call')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeDemo === 'missed-call'
                  ? 'bg-[#f97316] text-white shadow-lg'
                  : 'bg-white text-[#0f172a] border-2 border-gray-200 hover:border-[#f97316]'
              }`}
            >
              Missed Call → Text Back
            </button>
            <button
              onClick={() => setActiveDemo('web-lead')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeDemo === 'web-lead'
                  ? 'bg-[#f97316] text-white shadow-lg'
                  : 'bg-white text-[#0f172a] border-2 border-gray-200 hover:border-[#f97316]'
              }`}
            >
              Web Lead → Follow-Up
            </button>
            <button
              onClick={() => setActiveDemo('voice-ai')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeDemo === 'voice-ai'
                  ? 'bg-[#f97316] text-white shadow-lg'
                  : 'bg-white text-[#0f172a] border-2 border-gray-200 hover:border-[#f97316]'
              }`}
            >
              AI Phone Answering
            </button>
          </div>

          {/* Main Demo Section */}
          {activeDemo === 'missed-call' && (
            <div>
              <InteractiveDemo />
            </div>
          )}

          {activeDemo === 'web-lead' && (
            <div className="bg-[#F8F9FA] rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">
                Web Lead Automation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Incoming Web Lead</h3>
                  <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4">
                    <p className="text-sm text-[#374151] mb-2"><strong>Name:</strong> Sarah Johnson</p>
                    <p className="text-sm text-[#374151] mb-2"><strong>Issue:</strong> Kitchen sink won't drain</p>
                    <p className="text-sm text-[#374151] mb-2"><strong>Urgency:</strong> This week</p>
                    <p className="text-sm text-[#374151]"><strong>Source:</strong> Website contact form</p>
                  </div>
                  <div className="text-xs text-[#6b7280]">
                    Submitted: Tuesday 2:47 PM
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#f97316]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <span className="text-sm text-[#6b7280]">2 minutes later</span>
                    </div>
                    <p className="text-[#0f172a]">
                      <strong>Auto SMS:</strong> "Hi Sarah! Got your message about the kitchen sink. We can help! 
                      Do you have a preferred day this week? We have openings Wed-Fri."
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <span className="text-sm text-[#6b7280]">15 minutes later</span>
                    </div>
                    <p className="text-[#0f172a]">
                      <strong>Sarah:</strong> "Thursday would work great!"
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#f97316]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <span className="text-sm text-[#6b7280]">Instant response</span>
                    </div>
                    <p className="text-[#0f172a]">
                      <strong>Auto SMS:</strong> "Perfect! I have 10am or 2pm Thursday. Which works better?"
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <p className="font-bold text-green-900 mb-2">✓ Appointment Booked</p>
                    <p className="text-green-800 text-sm">Thursday 2:00 PM added to your calendar. 
                    Reminder sent 24 hours before.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'voice-ai' && (
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                AI Voice Receptionist (Tier 3 Only)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Sample Call #1: Routine Inquiry</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-[#f97316] mb-2">Customer:</p>
                      <p>"Hi, I need a plumber for a leaky faucet."</p>
                    </div>

                    <div className="bg-[#f97316]/20 rounded-lg p-4">
                      <p className="text-sm text-[#f97316] mb-2">AI:</p>
                      <p>"I can help with that! Is this an emergency or can we schedule it for later this week?"</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-[#f97316] mb-2">Customer:</p>
                      <p>"It's not urgent. Maybe Thursday?"</p>
                    </div>

                    <div className="bg-[#f97316]/20 rounded-lg p-4">
                      <p className="text-sm text-[#f97316] mb-2">AI:</p>
                      <p>"Great! I have 10am and 2pm available Thursday. Which works better for you?"</p>
                    </div>

                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/40">
                      <p className="font-bold text-green-300 mb-1">✓ Appointment Booked</p>
                      <p className="text-sm">Call duration: 1min 23sec</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Sample Call #2: Emergency</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-red-300 mb-2">Customer:</p>
                      <p>"Help! I have water flooding my basement!"</p>
                    </div>

                    <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/40">
                      <p className="text-sm text-red-300 mb-2">AI (Emergency Detected):</p>
                      <p className="font-bold">"That sounds like an emergency. I'm transferring you to our on-call technician right now. Please hold."</p>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                      <svg className="w-6 h-6 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-sm">Call transferred to your cell phone immediately</p>
                    </div>

                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/40">
                      <p className="font-bold text-green-300 mb-1">✓ Emergency Handled Correctly</p>
                      <p className="text-sm">Customer connected to you in under 10 seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm">Sounds like a real person (not robotic)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm">Detects emergencies (flood, gas, leak)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm">Books appointments directly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm">Transfers to you if confused (never traps customers)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-[#f97316] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to See It Work With Your Actual Phone Number?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a 15-minute live demo. We'll call your number, "miss" it, and you'll watch the magic happen.
            </p>
            <a
              href="/booking"
              className="inline-block bg-white text-[#f97316] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Book Your Live Demo
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
