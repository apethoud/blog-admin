export default function Button({ label, primary }) {
  return (
    <button className={primary
      ? `bg-sky-900 dark:bg-sky-700 
        text-sky-100 dark:text-sky-100 
        mt-4 p-2 
        font-bold`
      : `bg-sky-100 dark:bg-slate-800 
        text-sky-900 dark:text-sky-100 
        mt-4 p-2 
        font-bold`
    }>
      {label}
    </button>
  )
}