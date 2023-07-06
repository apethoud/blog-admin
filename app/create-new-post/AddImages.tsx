import { Post, PostElement, PostElements } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"
import ImageUploader from "../ImageUploader"

export default function AddImages({ newPostElements, post, submitPost }: { newPostElements: PostElements, post: Post, submitPost: (newPostElements: PostElements, post: Post) => void }) {
  const handleSubmit = e => {
    e.preventDefault()
    submitPost(newPostElements, post)
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <PageHeader text="Add Images" />
        <div className="text-md font-bold text-slate-900 dark:text-slate-100 my-2">{post.title}</div>
        <ImageUploader />
        {newPostElements.map((postElement: PostElement, index: number) => (
          <div key={index}>
            {postElement.type === "paragraph" && (
              <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{postElement.body}</div>
            )}
            {postElement.type === "image" && (
              <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{postElement.url}</div>
            )}
            <ImageUploader />
          </div>
        ))}
        <Button primary type="submit" label="Post to Production" />
      </form>
    </div>
  )
}
