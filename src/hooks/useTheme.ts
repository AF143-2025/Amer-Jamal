import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    // Ensure dark mode is permanently removed
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('aj_theme');
  }, []);

  return { theme: 'light' as const, toggleTheme: () => {}, isDark: false };
}

