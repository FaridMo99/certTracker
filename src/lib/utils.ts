import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const domain = "http://localhost:3000";

export async function getCount(): Promise<{count:number}> {
  const res = await fetch(domain)

  return await res.json()
}

export async function sendCount(count: number): Promise<{count:number}> {
  const res = await fetch(domain, {
    headers:{"Content-Type":"application/json"},
    method: "POST",
    body:JSON.stringify({count})
  })
  return await res.json()
}