import { useEffect, useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type ScenarioKey = 'plumbing' | 'hvac' | 'dental';
type MessageType = 'system' | 'ai' | 'customer' | 'confirmation';

interface DemoMessage {
  type: MessageType;
  text: string;
}

const scenarios: Record<ScenarioKey, {
  label: string;
  caller: string;
  missedAt: string;
  job: string;
  value: string;
  booked: string;
  messages: DemoMessage[];
}> = {
  plumbing: {
    label: 'Plumbing',
    caller: 'Sarah J.',
    missedAt: '2:47 PM',
    job: 'Kitchen sink will not drain',
    value: '$650 est. job value',
    booked: 'Thursday at 2:00 PM',
    messages: [
      { type: 'system', text: 'Missed call from Sarah J. at 2:47 PM' },
      { type: 'ai', text: "Hi Sarah, this is Wayne AI for River City Plumbing. We missed your call, but I can help get you scheduled. What is going on?" },
      { type: 'customer', text: "My kitchen sink won't drain and I need someone this week." },
      { type: 'ai', text: 'We can help with that. Is water backing up badly, or is it draining slowly?' },
      { type: 'customer', text: 'Draining slowly. Thursday would be best.' },
      { type: 'ai', text: 'I have Thursday at 10:00 AM or 2:00 PM. Which one works better?' },
      { type: 'customer', text: '2 works.' },
      { type: 'confirmation', text: 'Booked Thursday at 2:00 PM. Reminder scheduled.' },
    ],
  },
  hvac: {
    label: 'HVAC',
    caller: 'Mark T.',
    missedAt: '7:18 PM',
    job: 'AC not cooling upstairs',
    value: '$850 est. job value',
    booked: 'Tomorrow at 11:30 AM',
    messages: [
      { type: 'system', text: 'After-hours missed call from Mark T. at 7:18 PM' },
      { type: 'ai', text: 'Hi Mark, this is Wayne AI for Summit Heating & Air. We missed your call. Is this an emergency, or can I help schedule service?' },
      { type: 'customer', text: 'Not an emergency, but the upstairs is not cooling.' },
      { type: 'ai', text: 'Got it. Is the system running but blowing warm air, or not turning on at all?' },
      { type: 'customer', text: 'Running, just warm air.' },
      { type: 'ai', text: 'Thanks. We have tomorrow at 11:30 AM or 3:00 PM. Which works?' },
      { type: 'customer', text: '11:30 please.' },
      { type: 'confirmation', text: 'Booked tomorrow at 11:30 AM. Tech notes saved.' },
    ],
  },
  dental: {
    label: 'Dental',
    caller: 'Emily R.',
    missedAt: '12:06 PM',
    job: 'New patient cleaning',
    value: '$300 first visit value',
    booked: 'Tuesday at 9:00 AM',
    messages: [
      { type: 'system', text: 'Missed call from Emily R. at 12:06 PM' },
      { type: 'ai', text: 'Hi Emily, this is Wayne AI for Oak Street Dental. We missed your call. Are you looking to schedule an appointment?' },
      { type: 'customer', text: 'Yes, new patient cleaning if possible.' },
      { type: 'ai', text: 'Happy to help. Do mornings or afternoons usually work better for you?' },
      { type: 'customer', text: 'Mornings.' },
      { type: 'ai', text: 'We have Tuesday at 9:00 AM or Wednesday at 10:30 AM for a new patient visit.' },
      { type: 'customer', text: 'Tuesday at 9.' },
      { type: 'confirmation', text: 'Booked Tuesday at 9:00 AM. Intake link sent.' },
    ],
  },
};

const automationSteps = [
  'Instant reply sent',
  'Lead qualified',
  'Calendar checked',
  'Appointment booked',
  'Reminder queued',
];

function PhoneMessage({ message }: { message: DemoMessage }) {
  if (message.type === 'system') {
    return (
      <div className="text-center">
        <span className="inline-flex rounded-full bg-[#e2e8f0] px-3 py-1.5 text-[11px] font-medium text-[#475569]">
          {message.text}
        </span>
      </div>
    );
  }

  if (message.type === 'confirmation') {
    return (
      <div className="flex justify-center">
        <div className="inline-flex max-w-[88%] items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-xs font-bold text-green-800">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          {message.text}
        </div>
      </div>
    );
  }

  const isCustomer = message.type === 'customer';

  return (
    <div className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-5 shadow-sm ${
          isCustomer
            ? 'rounded-br-sm bg-[#f97316] text-white'
            : 'rounded-bl-sm bg-[#f1f5f9] text-[#0f172a]'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export function InteractiveDemo() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('plumbing');
  const [visibleMessages, setVisibleMessages] = useState(1);

  const scenario = scenarios[activeScenario];
  const visibleConversation = useMemo(
    () => scenario.messages.slice(0, visibleMessages),
    [scenario.messages, visibleMessages],
  );

  useEffect(() => {
    setVisibleMessages(1);
  }, [activeScenario]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = window.setInterval(() => {
      setVisibleMessages((current) => {
        if (current >= scenario.messages.length) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 1150);

    return () => window.clearInterval(timer);
  }, [isVisible, scenario.messages.length, activeScenario]);

  const completedSteps = Math.min(
    automationSteps.length,
    Math.max(1, Math.ceil((visibleMessages / scenario.messages.length) * automationSteps.length)),
  );

  return (
    <section id="demo" ref={ref} className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#64748b]">Missed call text-back</p>
          <h2 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Watch a missed call turn into a booked appointment
          </h2>
          <p className="text-lg text-[#475569]">
            This is the product promise in miniature: respond fast, ask the right questions, and move the lead onto the calendar before they call a competitor.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveScenario(key)}
              className={`rounded-lg border px-5 py-2.5 text-sm font-bold transition ${
                activeScenario === key
                  ? 'border-[#f97316] bg-[#f97316] text-white shadow-lg shadow-[#f97316]/20'
                  : 'border-gray-200 bg-white text-[#0f172a] hover:border-[#f97316] hover:text-[#f97316]'
              }`}
            >
              {scenarios[key].label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`transition-all delay-150 duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="mx-auto w-full max-w-[350px]">
              <div className="rounded-[2.7rem] bg-[#111827] p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[2.1rem] bg-white">
                  <div className="bg-[#0f172a] px-5 pb-4 pt-7 text-white">
                    <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/25" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] font-black">
                        W
                      </div>
                      <div>
                        <div className="text-sm font-bold">Wayne AI Assistant</div>
                        <div className="text-xs text-[#cbd5e1]">Responding now</div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[470px] space-y-3 overflow-hidden bg-white p-4">
                    {visibleConversation.map((message, index) => (
                      <div key={`${activeScenario}-${index}`} className="animate-typing">
                        <PhoneMessage message={message} />
                      </div>
                    ))}

                    {visibleMessages < scenario.messages.length && (
                      <div className="flex justify-start">
                        <div className="rounded-2xl rounded-bl-sm bg-[#f1f5f9] px-4 py-3">
                          <div className="flex gap-1">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8] [animation-delay:150ms]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8] [animation-delay:300ms]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex h-9 items-center justify-center bg-white">
                    <div className="h-1 w-28 rounded-full bg-[#111827]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all delay-300 duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-6 flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#f97316]">Lead captured</div>
                  <h3 className="mt-2 text-2xl font-black text-[#0f172a]">{scenario.caller}</h3>
                </div>
                <div className="rounded-lg bg-[#0f172a] px-4 py-3 text-white">
                  <div className="text-xs text-[#cbd5e1]">Missed at</div>
                  <div className="text-lg font-bold">{scenario.missedAt}</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-[#f8fafc] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Need</div>
                  <div className="mt-2 text-sm font-bold text-[#0f172a]">{scenario.job}</div>
                </div>
                <div className="rounded-xl bg-[#f8fafc] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Potential value</div>
                  <div className="mt-2 text-sm font-bold text-[#0f172a]">{scenario.value}</div>
                </div>
                <div className="rounded-xl bg-[#fff7ed] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#c2410c]">Outcome</div>
                  <div className="mt-2 text-sm font-bold text-[#9a3412]">{scenario.booked}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-5 text-xl font-bold text-[#0f172a]">What happened automatically</h3>
              <div className="space-y-4">
                {automationSteps.map((step, index) => {
                  const complete = index < completedSteps;
                  return (
                    <div key={step} className="flex items-center gap-4">
                      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                        complete ? 'border-[#f97316] bg-[#f97316] text-white' : 'border-gray-200 bg-white text-[#94a3b8]'
                      }`}>
                        {complete ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${complete ? 'text-[#0f172a]' : 'text-[#94a3b8]'}`}>{step}</div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div className={`h-full rounded-full bg-[#f97316] transition-all duration-500 ${complete ? 'w-full' : 'w-0'}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0f172a] p-6 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#fdba74]">Why this wins</div>
              <p className="mt-3 text-lg leading-7 text-[#e2e8f0]">
                The prospect gets a useful answer while intent is still high. Your business gets the details, the appointment, and the reminder without adding another front-desk task.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
