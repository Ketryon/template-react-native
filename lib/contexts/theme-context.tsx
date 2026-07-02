/**
 * Theme Context
 *
 * Provides dark mode support throughout the app by:
 * - Detecting system color scheme preference
 * - Providing appropriate colors based on theme
 */

import {
  darkColors,
  lightColors,
  type ThemeColors,
} from "@/blocks/theme";
import React, {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useColorScheme } from "react-native";

type ColorScheme = "light" | "dark";

interface ThemeContextValue {
  /** Current color scheme */
  colorScheme: ColorScheme;
  /** Whether dark mode is active */
  isDark: boolean;
  /** Theme colors based on current scheme */
  colors: ThemeColors;
}

const defaultValue: ThemeContextValue = {
  colorScheme: "light",
  isDark: false,
  colors: lightColors,
};

const ThemeContext = createContext<ThemeContextValue>(defaultValue);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();

  const value = useMemo<ThemeContextValue>(() => {
    const colorScheme: ColorScheme =
      systemColorScheme === "dark" ? "dark" : "light";
    const isDark = colorScheme === "dark";
    const colors = isDark ? darkColors : lightColors;

    return { colorScheme, isDark, colors };
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access theme colors and state
 *
 * @example
 * const { colors, isDark } = useTheme();
 * <View style={{ backgroundColor: colors.background }}>
 */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

/**
 * Hook to get just the colors (convenience)
 */
export function useThemeColors(): ThemeColors {
  const { colors } = useTheme();
  return colors;
}
