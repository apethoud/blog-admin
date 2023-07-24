import { ReactNode } from "react";

export default function PostCard({ children }: { children: ReactNode }) {
  return (
    <div className="border border-solid border-black dark:border-white mb-2 p-4">
      {children}
    </div>
  )
}