import { ReactNode } from "react";

export default function Text({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-lg text-slate-900 dark:text-slate-100 antialiased my-4">
      {children}
    </div>
  )
}