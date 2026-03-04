# Color System

## Overview

The color system for this portfolio is designed to be minimal, professional, and accessible. Colors are carefully chosen to maintain readability while providing visual interest.

## Primary Colors

These are the main brand colors used throughout the site.

### Dark Mode (Primary Theme)

- **Background**: Deep dark tones for main backgrounds
- **Surface**: Slightly lighter dark tones for cards and elevated surfaces
- **Primary Accent**: Brand color used for key interactive elements

### Light Accents

- **Highlight**: Used sparingly for emphasis
- **Success**: Used for positive actions or states
- **Warning**: Used for cautionary messages
- **Error**: Used for error states and validation

## Text Colors

### Primary Text

- High contrast against background
- Used for main content and headings
- WCAG AAA compliant contrast ratio

### Secondary Text

- Slightly muted compared to primary
- Used for supporting information
- WCAG AA compliant minimum

### Tertiary Text

- More subtle tone
- Used for metadata, timestamps, captions
- Maintained readability with adequate contrast

## Interactive Colors

### Links

- **Default**: Distinct from body text
- **Hover**: Brightened or shifted for clear feedback
- **Visited**: May use alternate shade (optional)
- **Focus**: Clear focus ring using accent color

### Buttons

- **Primary Button**: Uses primary accent color
- **Secondary Button**: Subtle alternative style
- **Hover States**: Slight brightening or darkening
- **Active States**: Pressed appearance
- **Disabled States**: Reduced opacity or desaturated

## Backgrounds

### Page Backgrounds

Keep backgrounds minimal and unobtrusive:

- Solid colors or very subtle gradients
- Dark theme as default
- Light theme option (future consideration)

### Section Backgrounds

- Slight variations for visual separation
- Subtle borders or shadows instead of heavy color changes
- Maintain readability of overlaid text

### Card Backgrounds

- Elevated appearance via subtle color shift
- Shadow for depth rather than stark color contrast
- Hover states with slight lightening or color shift

## Borders & Dividers

- Subtle borders using low-opacity colors
- Consistent stroke weights
- Used sparingly to avoid visual clutter

## Shadows

- Use shadows to create depth and hierarchy
- Multiple shadow layers for elevated surfaces
- Colored shadows using primary accent (optional for special effects)

## Gradients

When used, gradients should be:

- Subtle and smooth
- Aligned with brand colors
- Not overwhelming or distracting
- Used for accent elements, not large areas

## Accessibility

### Contrast Ratios

All color combinations must meet **WCAG AA standards** minimum:

- **Normal Text**: 4.5:1 contrast ratio minimum
- **Large Text**: 3:1 contrast ratio minimum
- **UI Components**: 3:1 contrast ratio for interactive elements

### Color Blindness Considerations

- Don't rely on color alone to convey information
- Use icons, labels, or patterns in addition to color
- Test with color blindness simulators
- Ensure interactive states are distinguishable without color

### High Contrast Mode

- Support Windows High Contrast mode
- Ensure sufficient contrast in all states
- Test with browser high contrast extensions

## Dark Mode

The portfolio currently uses a dark theme as the primary design. Future considerations:

- System preference detection
- Manual theme toggle
- Proper color token system for theme switching
- Consistent experience across light/dark modes

## Color Tokens

For future implementation with CSS custom properties or Tailwind config:

```css
/* Example structure (not currently implemented) */
--color-background
--color-surface
--color-primary
--color-text-primary
--color-text-secondary
--color-accent
--color-success
--color-warning
--color-error
```

## Tailwind Integration

Current color usage relies on:

- Tailwind's default color palette
- Custom colors defined in `tailwind.config.ts`
- Opacity modifiers for variants

## Best Practices

1. **Consistency**: Use the same color for the same purpose throughout
2. **Hierarchy**: Use color to establish visual hierarchy
3. **Restraint**: Don't overuse colors; maintain a focused palette
4. **Testing**: Always test color combinations for accessibility
5. **Documentation**: Document any new color additions and their usage

## Future Enhancements

- Formalized color token system
- Light mode color palette
- Theme switching functionality
- Expanded accent color options for different content types
