import { Paragraph, Paragraphs, Post } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"
import ImageUploader from "../ImageUploader"

export default function AddImages({ paragraphs, post, submitPost }: { paragraphs: Paragraphs, post: Post, submitPost: (paragraphs: Paragraphs, post: Post) => void }) {
  const handleSubmit = e => {
    e.preventDefault()
    submitPost(paragraphs, post)
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <PageHeader text="Add Images" />
        <div className="text-md font-bold text-slate-900 dark:text-slate-100 my-2">{post.title}</div>
        <ImageUploader />
        {paragraphs.map((paragraph: Paragraph, index: number) => (
          <>
            <div key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{paragraph.body}</div>
            <ImageUploader />
          </>
        ))}
        <Button primary type="submit" label="Post to Production" />
      </form>
    </div>
  )
}
