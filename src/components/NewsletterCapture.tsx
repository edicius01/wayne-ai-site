// Beehiiv subscribe embed. Paste the embed URL from Beehiiv:
// Grow → Subscribe Forms → Embed → copy the https://embeds.beehiiv.com/... URL.
// While this is empty the component renders nothing, so it is safe to ship ahead
// of the URL.
const BEEHIIV_EMBED_URL = '';

export function NewsletterCapture() {
  if (!BEEHIIV_EMBED_URL) {
    return null;
  }

  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-8 text-center">
      <h3 className="text-xl font-bold text-[#0f172a] mb-2">
        Get the next one in your inbox
      </h3>
      <p className="text-[#64748b] text-sm mb-5 max-w-md mx-auto">
        One short email a month on winning the jobs you're currently missing. No spam, unsubscribe anytime.
      </p>
      <iframe
        src={BEEHIIV_EMBED_URL}
        title="Subscribe to the Wayne AI newsletter"
        className="w-full max-w-md mx-auto"
        style={{ height: 52, backgroundColor: 'transparent' }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
