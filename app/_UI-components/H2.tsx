import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode}) {
  return (
    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}