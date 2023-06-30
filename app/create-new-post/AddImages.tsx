import { InProgressPost } from "./interfaces"

export default function AddImages({ post }: { post: InProgressPost }) {
  return (
    <div className="flex flex-col">
      {post?.paragraphs.map((paragraph: string, index: number) => (
        <div key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 m-4 p-4">{paragraph.body}</div>
      ))}
    </div>
  )
}