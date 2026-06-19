// Superseded by the static GoHighLevel chat widget embedded in index.html — that
// is the widget GHL's A2P 10DLC flow verifies on the live domain. Rendered as a
// no-op so the existing <ChatWidget /> mounts stay put; remove once A2P is settled
// (or if the standard GHL bubble is replaced with a custom-styled launcher again).
export function ChatWidget() {
  return null;
}
