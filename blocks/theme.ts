/**
 * Design tokens — Ketryon design system for React Native
 * Supports both light and dark color schemes
 *
 * Customize the color palette to match your app's brand.
 * Uses a neutral slate palette by default.
 */

// Light theme colors
export const lightColors = {
  // Primary palette
  background: "#F8FAFC",
  backgroundAlt: "#F1F5F9",
  surface: "#FFFFFF",

  // Text colors
  heading: "#0F172A",
  body: "#475569",
  muted: "#64748B",
  placeholder: "#94A3B8",

  // Brand colors — replace with your app's brand
  primary: "#6D28D9",
  primaryHover: "#5B21B6",
  accent: "#7C3AED",

  // UI colors
  white: "#FFFFFF",
  black: "#000000",
  border: "#E2E8F0",
  borderLight: "#F1F5F9",

  // Semantic
  success: "#16A34A",
  error: "#DC2626",
  warning: "#EAB308",

  // Tinted backgrounds
  primaryTint: "rgba(109, 40, 217, 0.1)",
  primaryBorderTint: "rgba(109, 40, 217, 0.2)",
  errorTint: "#FEF2F2",
  errorBorderTint: "#FECACA",

  // Overlay
  overlay: "rgba(15, 23, 42, 0.5)",

  // Shadows
  shadow: "rgba(15, 23, 42, 0.08)",

  // Tab indicator
  tabIndicator: "#FFFFFF",
  tabBackground: "#F1F5F9",
};

// Dark theme colors
export const darkColors = {
  // Primary palette
  background: "#0F172A",
  backgroundAlt: "#334155",
  surface: "#1E293B",

  // Text colors
  heading: "#F1F5F9",
  body: "#CBD5E1",
  muted: "#94A3B8",
  placeholder: "#64748B",

  // Brand colors
  primary: "#A78BFA",
  primaryHover: "#C4B5FD",
  accent: "#8B5CF6",

  // UI colors
  white: "#FFFFFF",
  black: "#000000",
  border: "#334155",
  borderLight: "#1E293B",

  // Semantic
  success: "#22C55E",
  error: "#EF4444",
  warning: "#FBBF24",

  // Tinted backgrounds
  primaryTint: "rgba(167, 139, 250, 0.15)",
  primaryBorderTint: "rgba(167, 139, 250, 0.3)",
  errorTint: "rgba(239, 68, 68, 0.15)",
  errorBorderTint: "rgba(239, 68, 68, 0.3)",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.7)",

  // Shadows
  shadow: "rgba(0, 0, 0, 0.3)",

  // Tab indicator
  tabIndicator: "#334155",
  tabBackground: "#1E293B",
};

// Color type for TypeScript
export type ThemeColors = typeof lightColors;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
};

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
};

export const fontWeight = {
  normal: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

/**
 * Font families loaded from Google Fonts
 * - Manrope: Clean sans-serif for body text
 * - Playfair Display: Elegant serif for headings
 */
export const fonts = {
  // Sans-serif (body text)
  sans: {
    regular: "Manrope_400Regular",
    medium: "Manrope_500Medium",
    semibold: "Manrope_600SemiBold",
    bold: "Manrope_700Bold",
  },
  // Serif (headings)
  serif: {
    regular: "PlayfairDisplay_400Regular",
    medium: "PlayfairDisplay_500Medium",
    semibold: "PlayfairDisplay_600SemiBold",
    bold: "PlayfairDisplay_700Bold",
  },
};
