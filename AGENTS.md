# Project architecture rules

- Keep the public site as a single-page React composition with anchored sections, because its navigation and storytelling depend on continuous scrolling.
- Implement continuous showcase motion in CSS with a reduced-motion fallback, because content must remain accessible without animation.