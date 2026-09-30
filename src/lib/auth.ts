/**
 * Simple authentication for admin panel
 * In production, use proper authentication service
 */

const ADMIN_PASSWORD = "admin123"; // Change this to your secure password

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
