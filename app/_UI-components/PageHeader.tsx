export default function PageHeader({ text }: { text: string }) {
  return (
    <div className="text-lg font-bold text-slate-900 dark:text-slate-100 my-4">
      {text}
    </div>
  )
}