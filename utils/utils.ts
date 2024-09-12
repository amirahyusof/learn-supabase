import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateYears(startYear: number) {
  const currentYear = new Date().getFullYear();
  const years = [];
  startYear = startYear || 1980;  
  while (startYear <= currentYear) {
      years.push(startYear++);
  }   
  return years;
}

