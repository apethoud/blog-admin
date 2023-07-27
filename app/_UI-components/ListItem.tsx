import { ReactNode } from "react";

export default function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="font-sans text-lg text-slate-900 dark:text-slate-100 antialiased ml-8">
      {children}
    </li>
  )
}