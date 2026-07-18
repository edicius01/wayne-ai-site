// Chat is currently off: the GHL chat widget was removed at the cancel-GHL
// gate (own A2P verified 07-13; /booking is the capture path). Kept as a no-op
// so the existing <ChatWidget /> mounts stay valid — put a real launcher here
// if site chat ever comes back.
export function ChatWidget() {
  return null;
}
