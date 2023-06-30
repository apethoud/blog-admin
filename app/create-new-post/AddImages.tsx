export default function AddImages({ post }) {
  return (
    <div className="flex flex-col">
      {post?.paragraphs.map((paragraph, index) => (
        <div key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 m-4 p-4">{paragraph.body}</div>
      ))}
    </div>
  )
}