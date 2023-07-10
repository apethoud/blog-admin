import { Post, PostElement, PostElements } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"
import ImageUploader from "../_ImageUploader/ImageUploader"
import { Dispatch, SetStateAction } from "react"

export default function AddImages({ 
  newPostElements, 
  setNewPostElements, 
  post, 
  submitPost 
}: { 
  newPostElements: PostElements, 
  setNewPostElements: Dispatch<SetStateAction<PostElements>>,
  post: Post, 
  submitPost: (newPostElements: PostElements, post: Post) => void 
}) {
  return (
    <div className="flex flex-col">
      <PageHeader text="Add Images" />
      <div className="text-md font-bold text-slate-900 dark:text-slate-100 my-2">{post.title}</div>
      <ImageUploader
        newPostElements={newPostElements}
        setNewPostElements={setNewPostElements}
      />
      {newPostElements.map((postElement: PostElement, index: number) => (
        <div key={index}>
          {postElement.type === "paragraph" && (
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{postElement.body}</div>
          )}
          {postElement.type === "image" && (
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">{postElement.url}</div>
          )}
          <ImageUploader
            newPostElements={newPostElements}
            setNewPostElements={setNewPostElements}
          />
        </div>
      ))}
      <Button primary type="button" onClick={() => submitPost(newPostElements, post)} label="Post to Production" />
    </div>
  )
}
