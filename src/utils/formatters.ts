import { Severity } from '../types';

export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function getSeverityClasses(severity?: Severity): { bg: string; text: string; border: string } {
  switch (severity) {
    case 'critical':
      return {
        bg: 'bg-teal-500/10 dark:bg-teal-500/15',
        text: 'text-teal-600 dark:text-teal-400',
        border: 'border-teal-500/30'
      };
    case 'high':
      return {
        bg: 'bg-orange-500/10 dark:bg-orange-500/15',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-500/30'
      };
    case 'medium':
      return {
        bg: 'bg-amber-500/10 dark:bg-amber-500/15',
        text: 'text-amber-600 dark:text-amber-400',
        border: 'border-amber-500/30'
      };
    case 'low':
      return {
        bg: 'bg-sky-500/10 dark:bg-sky-500/15',
        text: 'text-sky-600 dark:text-sky-400',
        border: 'border-sky-500/30'
      };
    case 'info':
    default:
      return {
        bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-500/30'
      };
  }
}

