export default function InputLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100 antialiased my-2">
      {children}
    </label>
  )
}