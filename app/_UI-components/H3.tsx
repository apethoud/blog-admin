import { ReactNode } from "react";

export default function H3({ children }: { children: ReactNode}) {
  return (
    <div className="text-xl font-bold text-slate-900 dark:text-slate-100 my-4">
      {children}
    </div>
  )
}