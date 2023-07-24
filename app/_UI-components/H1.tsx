import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode}) {
  return (
    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}