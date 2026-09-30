/**
 * Simple authentication for admin panel
 * Password is stored in environment variable for security
 */

// Get admin password from environment variable
// In production, use a proper authentication service
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("admin_authenticated") === "true";
}

export function login(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem("admin_authenticated", "true");
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem("admin_authenticated");
}
