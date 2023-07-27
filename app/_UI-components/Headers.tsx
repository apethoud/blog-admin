import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return (
    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <div className="text-xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}