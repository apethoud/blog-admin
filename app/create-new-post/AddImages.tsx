import { Paragraph, Paragraphs, Post } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"

export default function AddImages({ paragraphs, post, submitPost }: { paragraphs: Paragraphs, post: Post, submitPost: (paragraphs: Paragraphs, post: Post) => void }) {
  const handleSubmit = e => {
    e.preventDefault()
    submitPost(paragraphs, post)
  }

  const AddImageButton = () => (
    <div className="border border-dashed border-white mb-2 p-4">
      + Add image
    </div>
  )
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <PageHeader text="Add Images" />
        <div>{post.title}</div>
        <AddImageButton />
        {paragraphs.map((paragraph: Paragraph, index: number) => (
          <>
            <div key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{paragraph.body}</div>
            <AddImageButton />
          </>
        ))}
        <Button primary type="submit" label="Post to Production" />
      </form>
    </div>
  )
}
