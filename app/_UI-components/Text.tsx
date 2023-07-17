export default function Text({ children }) {
  return (
    <div className="font-sans text-lg text-slate-900 dark:text-slate-100 antialiased my-4">
      {children}
    </div>
  )
}