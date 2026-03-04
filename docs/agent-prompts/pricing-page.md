# Agent Prompt: Pricing Page Implementation

## Goal

Implement a pricing page for freelance web services.

## Requirements

- Next.js App Router page
- Tailwind styling
- Responsive pricing cards
- Static compatible
- No backend logic

## Deliverables

- pricing page component
- reusable pricing card component
- navigation update

## Technical Specifications

### Route

`/pricing` - Should be accessible via the main navigation

### Component Structure

```
src/app/pricing/
├── page.tsx          # Main pricing page
└── PricingContent.tsx # Content component with pricing cards
```

### Pricing Card Component

Create a reusable component at `src/components/PricingCard.tsx` that accepts:

- Service title
- Price
- Features list
- CTA button text
- Highlighted/featured flag (optional)

### Styling Requirements

- Use Tailwind CSS for all styling
- Ensure responsive design (mobile, tablet, desktop)
- Add subtle hover effects
- Use Framer Motion for entrance animations
- Follow existing design system colors and typography

### Navigation Integration

Update the navigation component to include the pricing page link.

## Implementation Notes

- Keep components simple and maintainable
- Follow existing code patterns in the project
- Ensure static export compatibility
- Test responsiveness at all breakpoints
- Use TypeScript for type safety
