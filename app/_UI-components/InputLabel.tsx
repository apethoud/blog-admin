import { ReactNode } from "react";

export default function InputLabel({ children, htmlFor }: { children: ReactNode, htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="inline-block font-sans font-bold text-lg text-slate-900 dark:text-slate-100 antialiased my-2">
      {children}
    </label>
  )
}