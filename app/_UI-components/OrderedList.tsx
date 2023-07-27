import { ReactNode } from "react";

export default function OrderedList({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal">
      {children}
    </ol>
  )
}