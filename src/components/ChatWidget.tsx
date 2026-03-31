import { useState, useEffect, useCallback } from 'react';

export function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const chatOpened = localStorage.getItem('chatOpened');
    if (chatOpened) {
      setShowBadge(false);
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setShowBadge(false);
    localStorage.setItem('chatOpened', 'true');
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Open chat widget"
        className={`fixed z-[9999] w-[60px] h-[60px] rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 bottom-5 right-5 md:bottom-[30px] md:right-[30px] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>

        {showBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f97316] border-2 border-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] md:inset-auto md:bottom-[30px] md:right-[30px]"
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Wayne AI"
        >
          <div
            className="absolute inset-0 bg-black/30 md:hidden"
            onClick={handleClose}
          />

          <div className="relative h-full w-full md:w-[400px] md:h-[600px] bg-white md:rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-slide-up">
            <div className="bg-[#f97316] text-white p-5 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Chat with Wayne AI</h3>
                  <p className="text-sm text-white/80">We typically respond within minutes</p>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close chat"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://widgets.leadconnectorhq.com/chat-widget?widgetId=696e4ca7639c1441f5e848b2"
                className="w-full h-full border-0"
                title="Chat Widget"
                allow="microphone"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
