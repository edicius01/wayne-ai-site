import { useEffect, useRef } from 'react';

// Beehiiv v3 subscribe-form embed (script loader, not the old embeds.beehiiv.com
// iframe). Manage the form at Beehiiv → Subscribers → Subscribe forms.
const BEEHIIV_FORM_ID = '038af92d-92fd-4430-9cfb-f26996834d4e';
const BEEHIIV_LOADER_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js';

export function NewsletterCapture() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The loader injects the form next to its own script tag, so the script has
  // to live inside the container; JSX-rendered script tags never execute.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.childElementCount > 0) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = BEEHIIV_LOADER_SRC;
    script.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID);
    container.appendChild(script);
    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-8 text-center">
      <h3 className="text-xl font-bold text-[#0f172a] mb-2">
        Get the next one in your inbox
      </h3>
      <p className="text-[#64748b] text-sm mb-5 max-w-md mx-auto">
        One short email a month on winning the jobs you're currently missing. No spam, unsubscribe anytime.
      </p>
      <div ref={containerRef} className="max-w-md mx-auto" />
    </div>
  );
}
