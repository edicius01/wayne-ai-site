export function LpGuarantee() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="rounded-2xl border-2 border-[#f97316] bg-[#FFF8F5] p-6 sm:p-8 text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <svg className="h-12 w-12 flex-shrink-0 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold text-[#0f172a]">Our 30-Day Job Guarantee</h3>
            <p className="mt-2 text-[#475569]">
              If the system doesn't catch at least <span className="font-bold text-[#f97316]">2 new jobs in your first 30 days</span>, we refund your first month and part ways as friends. No long-term contract — you're month-to-month and can cancel anytime.
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#475569] text-center leading-relaxed">
        Built and run by <span className="font-semibold text-[#0f172a]">Wayne Dewig</span> in Evansville, Indiana. When you reach out, you're talking to me — not a call center or a sales floor. I'll show you exactly how this works for your business, and if it's not a fit, I'll tell you straight.
      </p>
    </div>
  );
}
