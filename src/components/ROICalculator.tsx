import { useEffect, useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const presets = [
  { label: 'Plumbing', jobValue: 650, missedCalls: 9, closeRate: 48, monthlyCost: 897 },
  { label: 'HVAC', jobValue: 850, missedCalls: 7, closeRate: 42, monthlyCost: 897 },
  { label: 'Electrical', jobValue: 700, missedCalls: 6, closeRate: 45, monthlyCost: 897 },
  { label: 'Med Spa', jobValue: 425, missedCalls: 12, closeRate: 35, monthlyCost: 897 },
];

function MetricCard({ label, value, helper, tone = 'default' }: { label: string; value: string; helper: string; tone?: 'default' | 'accent' }) {
  return (
    <div className={`rounded-xl border p-5 ${tone === 'accent' ? 'border-[#f97316]/30 bg-[#fff7ed]' : 'border-gray-200 bg-white'}`}>
      <div className="text-sm font-medium text-[#64748b]">{label}</div>
      <div className={`mt-2 text-3xl font-black tracking-tight ${tone === 'accent' ? 'text-[#f97316]' : 'text-[#0f172a]'}`}>
        {value}
      </div>
      <div className="mt-2 text-sm leading-5 text-[#475569]">{helper}</div>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = '',
  suffix = '',
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-[#0f172a]">{label}</span>
        <span className="rounded-md bg-[#0f172a] px-2.5 py-1 text-sm font-bold text-white">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#f97316]"
      />
      <div className="mt-2 flex justify-between text-xs text-[#64748b]">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </label>
  );
}

export function ROICalculator() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [jobValue, setJobValue] = useState(650);
  const [missedCalls, setMissedCalls] = useState(8);
  const [closeRate, setCloseRate] = useState(45);
  const [monthlyCost, setMonthlyCost] = useState(897);
  const [showForm, setShowForm] = useState(false);

  const results = useMemo(() => {
    const monthlyMissedCalls = missedCalls * 4.33;
    const recoveredJobs = monthlyMissedCalls * (closeRate / 100);
    const recoveredRevenue = recoveredJobs * jobValue;
    const netGain = recoveredRevenue - monthlyCost;
    const roi = monthlyCost > 0 ? (netGain / monthlyCost) * 100 : 0;
    const breakEvenJobs = jobValue > 0 ? monthlyCost / jobValue : 0;

    return {
      monthlyMissedCalls,
      recoveredJobs,
      recoveredRevenue,
      netGain,
      roi,
      breakEvenJobs,
    };
  }, [closeRate, jobValue, missedCalls, monthlyCost]);

  // GHL's embed script handles iframe resizing; load it only once the user opts in.
  useEffect(() => {
    if (!showForm) return;
    if (document.querySelector('script[src="https://links.wayneai.net/js/form_embed.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://links.wayneai.net/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [showForm]);

  const formSrc =
    'https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc' +
    `?recovered_revenue=${Math.round(results.recoveredRevenue)}` +
    `&net_gain=${Math.round(results.netGain)}` +
    `&job_value=${jobValue}` +
    `&missed_leads_week=${missedCalls}` +
    `&close_rate=${closeRate}` +
    `&monthly_cost=${monthlyCost}`;

  return (
    <section ref={ref} className="border-t border-[#fed7aa] bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#64748b]">Interactive ROI</p>
            <h2 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">
              See what slow follow-up is costing you
            </h2>
            <p className="text-lg text-[#475569]">
              Adjust the numbers for your business. The goal is simple: prove how many recovered jobs it takes before the system pays for itself.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-6 shadow-lg sm:p-8">
              <div className="mb-6">
                <div className="mb-3 text-sm font-semibold text-[#475569]">Start with a common scenario</div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setJobValue(preset.jobValue);
                        setMissedCalls(preset.missedCalls);
                        setCloseRate(preset.closeRate);
                        setMonthlyCost(preset.monthlyCost);
                      }}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#0f172a] transition hover:border-[#f97316] hover:text-[#f97316]"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-7">
                <SliderControl label="Average job value" value={jobValue} min={150} max={2500} step={50} prefix="$" onChange={setJobValue} />
                <SliderControl label="Missed or delayed leads per week" value={missedCalls} min={1} max={30} onChange={setMissedCalls} />
                <SliderControl label="Close rate when you respond fast" value={closeRate} min={10} max={80} suffix="%" onChange={setCloseRate} />
                <SliderControl label="Monthly system cost" value={monthlyCost} min={397} max={1497} step={100} prefix="$" onChange={setMonthlyCost} />
              </div>
            </div>

            <div className="rounded-2xl bg-[#0f172a] p-6 text-white shadow-2xl sm:p-8">
              <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#fdba74]">Projected monthly upside</div>
                  <div className="mt-2 text-5xl font-black tracking-tight text-white">
                    {formatter.format(results.netGain)}
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3 text-left sm:text-right">
                  <div className="text-xs text-[#cbd5e1]">ROI after monthly cost</div>
                  <div className="text-2xl font-black text-[#fdba74]">{Math.max(Math.round(results.roi), 0).toLocaleString()}%</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard
                  label="Missed leads/month"
                  value={Math.round(results.monthlyMissedCalls).toString()}
                  helper="Based on your weekly missed or delayed lead estimate."
                />
                <MetricCard
                  label="Recoverable jobs/month"
                  value={results.recoveredJobs.toFixed(1)}
                  helper="Assumes fast response turns those leads into real conversations."
                />
                <MetricCard
                  label="Recovered revenue"
                  value={formatter.format(results.recoveredRevenue)}
                  helper="Estimated booked revenue before Wayne AI monthly cost."
                  tone="accent"
                />
                <MetricCard
                  label="Break-even point"
                  value={`${results.breakEvenJobs.toFixed(1)} jobs`}
                  helper="How many extra jobs cover the monthly system cost."
                  tone="accent"
                />
              </div>

              <div className="mt-6 rounded-xl border border-[#f97316]/30 bg-[#f97316]/10 p-5">
                <div className="mb-2 text-lg font-bold text-white">The practical takeaway</div>
                <p className="text-sm leading-6 text-[#e2e8f0]">
                  At these numbers, catching {Math.ceil(results.breakEvenJobs)} extra job{Math.ceil(results.breakEvenJobs) === 1 ? '' : 's'} covers the monthly cost. Every additional booked job becomes recovered revenue your current follow-up process is likely leaking.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-xl text-center">
            {!showForm ? (
              <>
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Want this breakdown for your actual business?
                </h3>
                <p className="mt-2 text-[#475569]">
                  We'll send a personalized version and show you exactly where your follow-up is leaking jobs — free, no pitch.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-[#ea580c] hover:shadow-xl hover:shadow-[#f97316]/25"
                >
                  Email me my ROI breakdown
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            ) : (
              <div className="rounded-2xl bg-white p-2 shadow-2xl">
                <iframe
                  src={formSrc}
                  style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                  id="inline-roi-mmDnjub0Cj9Hw1YZOrIc"
                  data-layout="{'id':'INLINE'}"
                  data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                  data-form-name="ROI Calculator"
                  title="Email me my ROI breakdown"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
