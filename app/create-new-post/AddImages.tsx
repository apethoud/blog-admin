import { Paragraph, Paragraphs, Post } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"

export default function AddImages({ paragraphs, post, submitPost }: { paragraphs: Paragraphs, post: Post, submitPost: (post: Post) => Promise<void> }) {
  return (
    <div className="flex flex-col">
      <form action={() => submitPost(paragraphs, post)}>
      <PageHeader text="Add Images (coming soon)" />
      {paragraphs.map((paragraph: Paragraph, index: number) => (
        <div key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{paragraph.body}</div>
      ))}
      <Button primary type="submit" label="Post to Production" />
      </form>
    </div>
  )
}
