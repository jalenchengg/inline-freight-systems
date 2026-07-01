// lib/brand.ts — one source of truth for brand colors
export const brand = {
  base: "#0A1230",      // deep navy — dark backgrounds
  baseAlt: "#0E1A42",   // lifted navy — ticker/stats band
  navy: "#1B2F8F",      // royal navy from the logo
  accent: "#14A0DC",    // sky blue — CTAs, links
  green: "#5CA832",     // logo green — small accents
  amber: "#F5A623",     // logo containers — sparingly
  paper: "#F5F8FB",     // light section background
  steel: "#7FA8C8",     // secondary text on dark
  slate: "#5B6B7C",     // secondary text on light
  ink: "#0A1230",       // headings on light
  border: "#DFE7EF",    // card borders on light
} as const;