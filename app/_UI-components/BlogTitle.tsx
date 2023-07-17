export default function BlogTitle({ children }) {
  return (
    <div className="font-sans font-bold text-5xl text-violet-600 dark:text-violet-500 antialiased mt-12 mb-6">
      {children}
    </div>
  )
}