---
name: Neon Persona
colors:
  surface: '#f9f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f9f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeef'
  surface-container-high: '#e8e8e9'
  surface-container-highest: '#e2e2e3'
  on-surface: '#1a1c1d'
  on-surface-variant: '#564052'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#897083'
  outline-variant: '#dcbed4'
  surface-tint: '#a900a9'
  primary: '#a900a9'
  on-primary: '#ffffff'
  primary-container: '#ff00ff'
  on-primary-container: '#510051'
  inverse-primary: '#ffabf3'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#00f8f8'
  on-secondary-container: '#006e6e'
  tertiary: '#106e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#1da900'
  on-tertiary-container: '#043300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd7f5'
  primary-fixed-dim: '#ffabf3'
  on-primary-fixed: '#380038'
  on-primary-fixed-variant: '#810081'
  secondary-fixed: '#00fbfb'
  secondary-fixed-dim: '#00dddd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#f9f9fa'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e3'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-desktop: 4rem
  margin-mobile: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
---

## Brand & Style

The design system is built to balance professional credibility with high-octane creative energy. It targets a modern audience that values technical proficiency as much as individual personality. The aesthetic combines the clean, breathable structure of **Minimalism** with the futuristic, layered depth of **Glassmorphism**. 

The interface should feel airy and expansive, using high-contrast neon accents as functional "electric" waypoints throughout the journey. By pairing clinical white surfaces with hyper-saturated colors, the design system evokes a sense of "digital light" and optimism, ensuring the portfolio feels alive and responsive rather than static.

## Colors

The color strategy for this design system utilizes a "High-Voltage Light Mode" approach. Surfaces are kept at near-pure white or extremely light cool-gray to provide maximum contrast for the neon palette.

- **Primary (Neon Pink):** Used for high-priority actions, brand moments, and primary CTAs.
- **Secondary (Neon Cyan):** Used for interactive elements, links, and progress indicators.
- **Tertiary (Neon Lime):** Used for highlights, success states, and decorative badges.
- **Neutrals:** Backgrounds should remain clean to allow the neon "glow" to resonate without visual clutter.

Accent colors should be used sparingly but boldly to guide the eye toward key information and conversion points.

## Typography

This design system utilizes **Plus Jakarta Sans** for its geometric clarity and friendly, modern curves. The type hierarchy is intentionally dramatic; large display headings are set with tight letter-spacing and heavy weights to create an impactful "personality-first" feel.

Body text is optimized for readability with generous line heights. Labels and small metadata should utilize the semibold weight and increased letter spacing to ensure they stand out against the vibrant accent colors. For mobile screens, headlines scale down aggressively to maintain the layout's "breathing room" without causing awkward text wraps.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop, centered within the viewport to maintain a premium, editorial feel. 

- **Desktop:** A 12-column grid with 32px (2rem) gutters. Margins are generous to emphasize the "professional but creative" atmosphere.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column fluid grid with 16px margins.

Vertical rhythm is driven by the "stack" variables, favoring large gaps (`stack-lg`) between major sections to ensure the neon elements don't overwhelm the user. Content should be grouped in clear containers with consistent internal padding.

## Elevation & Depth

Depth in this design system is achieved through a combination of **Glassmorphism** and **Soft Ambient Shadows**.

1.  **Surface Layers:** Main content areas use pure white backgrounds.
2.  **Glass Layers:** Navigation bars and floating cards use a semi-transparent white (opacity 70-80%) with a `20px` backdrop blur. These elements should have a thin, 1px semi-transparent white border to simulate the edge of glass.
3.  **Shadows:** Shadows are extra-diffused and low-opacity (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.04)`). 
4.  **Neon Glows:** For active or hovered states, shadows can take on a subtle tint of the element's primary neon color (e.g., a pink button cast a soft pink glow) to reinforce the energetic vibe.

## Shapes

The shape language is defined by large, playful radii. This softness counteracts the "sharpness" of the neon colors, making the design feel approachable.

- **Small Components (Buttons, Chips):** Use `rounded-lg` (16px) for a soft, tactile feel.
- **Large Containers (Cards, Modals):** Use `rounded-xl` (24px) to create a distinct, nested appearance.
- **Avatars/Decorative Circles:** Full pill-shaped rounding is encouraged for personality-driven images.

The consistency of these large radii is critical to maintaining the system's modern, cohesive identity.

## Components

### Buttons
Primary buttons feature a solid neon fill with white text. Secondary buttons use a thick 2px neon border with a transparent background. All buttons should have a hover state that increases the shadow diffusion or adds a subtle color glow.

### Cards
Cards are the primary container for portfolio projects. They should use the glassmorphic style (backdrop blur) when placed over decorative neon gradients, or a solid white background with a soft shadow when placed on the neutral light-gray background.

### Input Fields
Inputs are large (48px-56px height) with a 16px corner radius. The focus state should be a 2px Neon Cyan border with a soft cyan outer glow.

### Chips & Tags
Use these for skills or categories. They should have a light-gray background and bold, neon-colored text to maintain high legibility without distracting from primary CTAs.

### Progress Indicators
Utilize the Neon Lime (#39ff14) for positive progress and completion, creating a sense of momentum and "vibrancy" in the user experience.