import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(time: string | number | Date): string {
  const now = new Date();
  const past = new Date(time);

  const years = now.getFullYear() - past.getFullYear();
  const months = now.getMonth() - past.getMonth();
  const days = now.getDate() - past.getDate();

  let totalMonths = years * 12 + months;

  // 如果当前日期的天数小于过去的日期的天数，则减去一个月
  if (days < 0) {
    totalMonths -= 1;
  }
  if (totalMonths > 0) {
    return totalMonths === 1 ? '1个月前' : `${totalMonths}个月前`;
  }
  
  const diff = now.getTime() - past.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (years > 0) {
    return years === 1 ? '一年前' : `${years}年前`;
  }
  if (days > 0) {
    return days === 1 ? '1天前' : `${days}天前`;
  }
  if (hours > 0) {
    return hours === 1 ? '1小时前' : `${hours}小时前`;
  }
  if (minutes > 0) {
    return minutes === 1 ? '1分钟前' : `${minutes}分钟前`;
  }
  return seconds <= 1 ? '1秒前' : `${seconds}秒前`;
}

