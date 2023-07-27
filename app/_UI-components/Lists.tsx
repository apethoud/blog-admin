import { ReactNode } from "react";

export function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal">
      {children}
    </ol>
  )
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc">
      {children}
    </ul>
  )
}

export function Li({ children }: { children: ReactNode }) {
  return (
    <li className="font-sans text-lg text-slate-900 dark:text-slate-100 antialiased ml-8">
      {children}
    </li>
  )
}