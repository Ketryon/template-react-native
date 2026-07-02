/**
 * API Service
 *
 * Centralized API client for communicating with the backend.
 * All requests go through this module for consistent error handling,
 * auth headers, and timeout management.
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

function getApiBaseUrl(): string {
  const url = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

const API_BASE_URL = getApiBaseUrl();
const REQUEST_TIMEOUT = 30_000;

// =============================================================================
// AUTH TOKEN MANAGEMENT
// =============================================================================

/**
 * Global token getter — set this from your auth provider/hook.
 *
 * @example
 * // In your auth hook:
 * import { setTokenGetter } from "@/services/api";
 * setTokenGetter(() => getToken());
 */
let getAuthToken: (() => Promise<string | null>) | null = null;

export function setTokenGetter(getter: () => Promise<string | null>) {
  getAuthToken = getter;
}

// =============================================================================
// REQUEST HELPER
// =============================================================================

export class ApiError extends Error {
  status: number;
  body: string;

  constructor(status: number, body: string, path: string) {
    super(`API ${status} at ${path}: ${body}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  // Attach auth token if available
  if (getAuthToken) {
    const token = await getAuthToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text();
      throw new ApiError(response.status, body, path);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  } finally {
    clearTimeout(timeout);
  }
}

// =============================================================================
// PUBLIC API
// =============================================================================

export const api = {
  get: <T>(path: string) => request<T>(path),

  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};
