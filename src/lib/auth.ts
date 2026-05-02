/** localStorage anahtarı — giriş durumu */
export const AUTH_LOGGED_IN_KEY = "isLoggedIn";

export function readLoggedIn(): boolean {
  try {
    return localStorage.getItem(AUTH_LOGGED_IN_KEY) === "true";
  } catch {
    return false;
  }
}

export function writeLoggedIn(value: boolean): void {
  try {
    if (value) localStorage.setItem(AUTH_LOGGED_IN_KEY, "true");
    else localStorage.removeItem(AUTH_LOGGED_IN_KEY);
  } catch {
    /* private mode / devtools */
  }
}

export function credentialsMatch(username: string, password: string): boolean {
  const u = import.meta.env.VITE_LOGIN_USERNAME ?? "sudenazyagiz";
  const p = import.meta.env.VITE_LOGIN_PASSWORD ?? "03052007";
  if (!u || !p) return false;
  return username === u && password === p;
}
