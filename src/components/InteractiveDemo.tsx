import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const messages = [
  { type: 'system', text: 'Missed call from (812) 555-0123' },
  { type: 'ai', text: "Hi! Thanks for calling. We're on another job right now. Can I help you schedule a visit? Reply with YES and I'll get you booked!" },
  { type: 'customer', text: 'Yes' },
  { type: 'ai', text: 'Perfect! What day works best? We have openings Tuesday-Friday this week.' },
  { type: 'customer', text: 'Tuesday' },
  { type: 'ai', text: 'Great! I have 10am, 2pm, or 4pm available Tuesday. Which time?' },
  { type: 'customer', text: '2pm' },
  { type: 'ai', text: "You're all set for Tuesday at 2pm! You'll get a reminder 24 hours before. See you then!" },
  { type: 'confirmation', text: 'Appointment Confirmed' },
];

const features = [
  'Responds in under 30 seconds',
  'Natural conversation flow',
  'Direct calendar booking',
  'Automatic reminders sent',
  'Works 24/7, even after hours',
];

export function InteractiveDemo() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= messages.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="demo" ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Here's exactly what your customers see when you miss a call
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative mx-auto" style={{ width: 'min(320px, 80vw)', aspectRatio: '9 / 19.5' }}>
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                <div className="relative h-full bg-[#1A1A1A] rounded-[2rem] sm:rounded-[2.5rem] p-0.5 sm:p-1">
                  <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-7 bg-[#1A1A1A] rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2a2a2a] rounded-full" />
                  </div>

                  <div className="h-full bg-white rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden flex flex-col">
                    <div className="bg-[#f97316] text-white text-center py-3 sm:py-4 px-4 pt-8 sm:pt-10">
                      <p className="text-sm sm:text-base font-medium">Messages</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 sm:space-y-3">
                      {messages.slice(0, visibleMessages).map((message, index) => (
                        <div
                          key={index}
                          className={`animate-typing ${
                            message.type === 'system'
                              ? 'text-center'
                              : message.type === 'customer'
                              ? 'flex justify-end'
                              : message.type === 'confirmation'
                              ? 'flex justify-center'
                              : 'flex justify-start'
                          }`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {message.type === 'system' && (
                            <div className="bg-gray-100 text-[#374151] text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
                              {message.text}
                            </div>
                          )}
                          {message.type === 'ai' && (
                            <div className="bg-gray-100 text-[#1f2937] text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-bl-sm max-w-[88%]">
                              {message.text}
                            </div>
                          )}
                          {message.type === 'customer' && (
                            <div className="bg-[#f97316] text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-br-sm max-w-[88%]">
                              {message.text}
                            </div>
                          )}
                          {message.type === 'confirmation' && (
                            <div className="bg-green-100 text-green-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 animate-pulse-custom">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {message.text}
                            </div>
                          )}
                        </div>
                      ))}

                      {visibleMessages < messages.length && visibleMessages > 0 && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl">
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="h-6 sm:h-8 bg-white flex items-center justify-center">
                      <div className="w-24 sm:w-32 h-1 bg-[#1A1A1A] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4"
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-[#0f172a]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
