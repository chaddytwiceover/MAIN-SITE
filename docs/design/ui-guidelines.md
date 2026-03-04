# UI Guidelines

## Design Philosophy

This portfolio follows a **minimal, modern design** approach with subtle motion and clear hierarchy. The interface prioritizes content readability and user experience while maintaining visual interest through thoughtful animations and interactions.

## Design Principles

1. **Clarity First** - Content should be easy to read and navigate
2. **Subtle Motion** - Animations enhance but don't distract
3. **Responsive Always** - Seamless experience across all devices
4. **Accessible by Default** - Respect user preferences and accessibility standards

## Typography

### Primary Font

**Inter** - Used throughout the application for its excellent readability and modern aesthetic.

### Type Scale

- **Headings**: Bold weights, clear hierarchy (h1 → h2 → h3)
- **Body Text**: Regular weight, optimal line height for readability
- **Labels**: Medium weight for UI elements and navigation

### Best Practices

- Maintain clear contrast ratios (WCAG AA minimum)
- Use consistent sizing scale
- Limit line length for optimal readability (60-80 characters)
- Provide adequate line height (1.5-1.8 for body text)

## Motion Design

All animations should enhance the user experience without causing distraction or discomfort.

### Animation Types

**Fade-In**

- Used for page transitions and content reveals
- Duration: 0.3-0.5 seconds
- Easing: ease-out or custom cubic-bezier

**Slide-Up**

- Used for entering elements and cards
- Subtle vertical movement (20-30px)
- Combined with fade-in for smooth entrance

**Hover Effects**

- Scale transformations (1.0 → 1.02 to 1.05)
- Color transitions
- Shadow elevation changes
- Duration: 0.2-0.3 seconds

**Interactive Feedback**

- Button press states
- Card tilt effects (3D transform)
- Smooth color transitions on links

### Reduced Motion

Always respect the `prefers-reduced-motion` media query. The project includes a `useSafeAnimation` hook for this purpose.

## Layout

### Container Widths

- **Max Width**: Consistent container max-width across pages
- **Padding**: Responsive horizontal padding
- **Breakpoints**: Follow Tailwind's default breakpoint system

### Spacing

Use Tailwind's spacing scale consistently:

- **Sections**: Large vertical spacing (8-12 units)
- **Components**: Medium spacing (4-8 units)
- **Elements**: Small spacing (2-4 units)

### Grid System

- Responsive grid layouts for project cards
- Auto-fit/auto-fill for flexible columns
- Consistent gap spacing

## Components

### Navigation

- Fixed position with scroll progress indicator
- Mobile-responsive hamburger menu
- Clear active state indicators
- Smooth transitions

### Cards

- Subtle shadow for depth
- Hover elevation effects
- Rounded corners for modern aesthetic
- Consistent padding and spacing

### Buttons & Links

- Clear hover and focus states
- Adequate touch target sizes (minimum 44x44px)
- Consistent styling across the site
- Loading and disabled states where applicable

### Forms

- Clear labels and validation messages
- Focus states with visible indicators
- Helpful placeholder text
- Inline error messages

## Color Application

### Text

- High contrast for body text
- Secondary colors for less important information
- Link colors distinct but harmonious

### Backgrounds

- Minimal, clean backgrounds
- Subtle gradients or solid colors
- Proper contrast with foreground content

### Interactive Elements

- Clear hover states
- Focus indicators for keyboard navigation
- Active states for buttons and links

## Iconography

- Use consistent icon style (outlined or filled)
- Appropriate sizing relative to text
- Clear labels or tooltips when needed

## Responsive Design

### Mobile First

- Design for mobile viewports first
- Progressively enhance for larger screens
- Touch-friendly interactions

### Breakpoints

Follow Tailwind's default breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Accessibility

- Maintain WCAG AA compliance minimum
- Provide keyboard navigation
- Include screen reader-friendly labels
- Respect user preferences (reduced motion, high contrast, etc.)
- Ensure adequate color contrast ratios
- Use semantic HTML

## Design Consistency

- Reuse components whenever possible
- Follow established patterns
- Document deviations from standards
- Review UI changes for consistency across the site
