# Design System Documentation

## 1. Overview & Creative North Star: "The Digital Sanctuary"

This design system is a transition from the traditional, rigid layouts of the past into a high-end, editorial experience that feels both vibrant and soulful. We are moving away from the heavy green and gold palette toward a sophisticated, feminine spectrum of magentas and mauves.

**Creative North Star: The Digital Sanctuary**
The goal is to create a space that feels curated, not manufactured. We achieve this through **Enlightened Asymmetry**—breaking the standard grid with overlapping elements, high-contrast typography, and generous breathing room. This is not a "website template"; it is a digital expression of a ministry that is modern, elegant, and deeply intentional.

---

## 2. Colors & Surface Philosophy

The color palette is built on tonal depth. We use the vibrancy of Hot Pink/Magenta for impact, balanced by the grounding presence of Dusty Mauve and warm neutral surfaces.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts or subtle tonal transitions.
- Use `surface` (#fcf9f8) for the main page background.
- Use `surface-container-low` (#f6f3f2) to define distinct content blocks.
- Use `surface-container-highest` (#e5e2e1) for interactive elements that need to pull forward.

### Surface Hierarchy & Nesting
Think of the UI as a series of physical layers—stacked sheets of fine paper.
- **Layer 0 (Base):** `surface`
- **Layer 1 (Section):** `surface-container-low` or `primary-fixed` (for soft pink background moments).
- **Layer 2 (Content Card):** `surface-container-lowest` (#ffffff) to create a clean, crisp lift.

### Glassmorphism & Signature Textures
For floating navigation or overlaying modals, use a backdrop blur (12px - 20px) with a semi-transparent `surface` color. 
- **Signature Gradient:** For high-impact CTAs or Hero backgrounds, utilize a subtle linear gradient transitioning from `primary` (#b30a62) to `primary-container` (#d5307b). This provides a "soul" and visual depth that flat colors cannot achieve.

---

## 3. Typography: The Editorial Voice

We pair the sophisticated, high-contrast serif **Newsreader** with the clean, functional sans-serif **Manrope**.

*   **Display & Headlines (Newsreader):** This is the "Voice" of the ministry. Use `display-lg` and `headline-lg` for poetic statements and core headings. The serif nature conveys authority and soul.
*   **Body & Labels (Manrope):** This is the "Guide." Use `body-lg` for readability. Manrope provides a modern, clean contrast to the expressive headlines, ensuring the interface feels contemporary.
*   **Intentional Scale:** Do not be afraid of the gap between `display-lg` (3.5rem) and `body-md` (0.875rem). This high-contrast scale is what gives the layout its "premium magazine" aesthetic.

---

## 4. Elevation & Depth

Hierarchy is achieved through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift without the need for heavy shadows.
*   **Ambient Shadows:** For elements that truly "float" (like a primary action button or a featured modal), use extra-diffused shadows. 
    *   *Shadow Style:* 0px 12px 32px rgba(140, 112, 119, 0.08). The shadow is tinted with the `outline` color to mimic natural, ambient light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **20% opacity**. Never use 100% opaque, high-contrast borders.

---

## 5. Components

### Buttons
*   **Primary:** Uses the Signature Gradient (`primary` to `primary-container`) with `on-primary` text. Use `rounded-full` (9999px) for a soft, inviting feel.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. `rounded-xl` (1.5rem).
*   **Tertiary/Link:** `on-surface` text with a 2px underline in `primary-fixed` (Soft Pink), offset by 4px.

### Cards & Lists
*   **Forbid Divider Lines:** Separate list items using vertical white space (use the `1rem` or `1.5rem` spacing tokens) or alternating `surface-container-low` backgrounds.
*   **Card Styling:** Use `rounded-xl` and a `surface-container-lowest` background. Ensure padding is generous (minimum 2rem).

### Input Fields
*   **State:** Use `surface-container-low` for the field background. Instead of a perimeter border, use a 2px bottom-border in `outline-variant`. On focus, transition the bottom-border to `primary`.

### Specialized Ministry Components
*   **Quote Blocks:** Large `display-sm` Newsreader text in `secondary` (#90456c), intentionally offset or overlapping a soft pink `primary-fixed` background block.
*   **Interactive Prayer Cards:** Use Glassmorphism (backdrop blur) with a `secondary-container` tint to make these feel like "special" moments in the user journey.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** If a section feels crowded, double the padding. The "Sanctuary" needs room to breathe.
*   **Use Asymmetric Imagery:** Place images off-center or allow them to bleed off the edge of a container to break the "boxed-in" feel.
*   **Layer Tones:** Use the pink/mauve spectrum to create depth. A `secondary-fixed` container inside a `surface` section feels intentional and high-end.

### Don't:
*   **Don't use Green/Gold:** These are the legacy colors. Stick to the Magenta, Mauve, and Charcoal palette to maintain the "Vibrant & Feminine" soul.
*   **Don't use 1px Solid Borders:** It cheapens the experience. Rely on color shifts and shadows.
*   **Don't center-align everything:** While a hero might be centered, try left-aligning headlines and right-aligning body text in a staggered, editorial fashion.
*   **Don't use "Pure Black":** Use `on-surface` (#1c1b1b) or Dark Charcoal (#1A1A1A) for text to keep the contrast sophisticated rather than harsh.