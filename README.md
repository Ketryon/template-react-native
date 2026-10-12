# template-react-native

A starter for Expo / React Native apps: file-based routing with three tabs, light and dark theming, custom fonts, a typed API client and TanStack Query, ready to rename and build on.

## What's included

- **Expo SDK 54 + Expo Router 6** (React Native 0.81, React 19.1, New Architecture and React Compiler enabled, typed routes)
- **Tab navigation** — `app/(tabs)/` with Home, Explore and Settings placeholder screens, plus a root stack in `app/_layout.tsx` ready for modal screens
- **Theming** — design tokens in `blocks/theme.ts` (light and dark palettes, spacing, font sizes) and a `ThemeProvider` / `useTheme()` hook in `lib/contexts/` that follows the system color scheme
- **Fonts** — Manrope (sans) and Playfair Display (serif) via `@expo-google-fonts`, with the splash screen held until they load
- **API client** — `services/api.ts`: `api.get/post/put/patch/delete` over `fetch`, base URL from `EXPO_PUBLIC_API_URL`, 30 s timeout, `ApiError` with status and body, and an optional bearer token via `setTokenGetter()`
- **Data fetching** — TanStack Query provider in `lib/query-client.tsx` (5 min stale time, no retries on 4xx)
- **Toasts** — `react-native-toast-message` with a themed config in `blocks/toast/`
- **SVG imports** — `react-native-svg-transformer` wired up in `metro.config.js`
- **EAS** — `eas.json` with development, preview and production profiles

Also installed but not yet used in the code: `expo-image`, `expo-secure-store`, `expo-web-browser`, `expo-system-ui`.

## Project layout

```
app/        Expo Router screens and layouts
blocks/     Theme tokens, toast config, UI primitives
lib/        Contexts, query client, hooks, utils, types
services/   API client
```

## Getting started

Requires Node and pnpm.

```bash
pnpm install
cp .env.example .env
pnpm start          # Expo dev server (press i / a for a simulator)
```

`pnpm ios` and `pnpm android` start the dev server and open the respective simulator directly.

### Environment variables

| Variable              | Default                 | Used by           |
| --------------------- | ----------------------- | ----------------- |
| `EXPO_PUBLIC_API_URL` | `http://localhost:3000` | `services/api.ts` |

The EAS build profiles in `eas.json` set their own `EXPO_PUBLIC_API_URL` (`https://api.example.com` for preview and production) — change these to your backend.

### Before your first build

- `app.json` references `./assets/images/icon.png` and `./assets/images/splash-icon.png`; the `assets/` folder is not in this repo, so add your own icon and splash images.
- Replace the app name, `slug`, `scheme`, `ios.bundleIdentifier` and `android.package` in `app.json`, and fill in `extra.eas.projectId` (and the submit fields in `eas.json`) for your EAS project.

## Scripts

| Command        | What it does                     |
| -------------- | -------------------------------- |
| `pnpm start`   | Start the Expo dev server        |
| `pnpm ios`     | Start and open the iOS simulator |
| `pnpm android` | Start and open Android           |
| `pnpm lint`    | Run ESLint (`expo lint`)         |

Type-check with `pnpm exec tsc --noEmit`.

## Built by Ketryon

Built and used by [Ketryon](https://www.ketryon.com) — a developer on subscription for founders.

## License

MIT — see [LICENSE](./LICENSE).
