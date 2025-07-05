import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 클래스 이름을 조합하여 반환
 * @param inputs 클래스 이름
 * @returns 조합된 클래스 이름
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
