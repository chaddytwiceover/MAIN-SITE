## 2026-08-30 - [Copy Email Button Accessibility]
**Learning:** Dynamic button text state changes (e.g. "Copy email" -> "Copied") need `aria-live="polite"` so screen readers announce state updates to users, along with visible focus ring indicators (`focus-visible:ring-2`).
**Action:** Always include `aria-live="polite"` and explicit focus visible states on dynamic feedback action buttons.
