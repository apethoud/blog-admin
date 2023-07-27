import { InProgressPost, InProgressPostElement, InProgressPostElements } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"
import ImageUploader from "../_ImageUploader/ImageUploader"
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"

const divideTextByNewline = (text: string | undefined) => {
  return text ? text.split('\n') : []
}

export default function AddImages({ 
  newPostElements, 
  setNewPostElements, 
  post, 
  submitPost 
}: { 
  newPostElements: InProgressPostElements, 
  setNewPostElements: Dispatch<SetStateAction<InProgressPostElements>>,
  post: InProgressPost, 
  submitPost: (newPostElements: InProgressPostElements, post: InProgressPost) => void 
}) {
  return (
    <div className="flex flex-col">
      <PageHeader text="Add Images" />
      <div className="text-md font-bold text-slate-900 dark:text-slate-100 my-2">{post.title}</div>
      <ImageUploader
        insertionIndex={0}
        newPostElements={newPostElements}
        setNewPostElements={setNewPostElements}
      />
      {newPostElements.map((postElement: InProgressPostElement, index: number) => (
        <div key={index}>
          {postElement.type === "paragraph" && (
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">
              {divideTextByNewline(postElement.body).map((el, index) => (
                <div key={index}>{el}</div>
              ))}
            </div>
          )}
          {postElement.type === "image" && postElement.url && (
            <Image 
              src={postElement.url}
              width={800}
              height={600}
              className="my-2"
              alt="pic"
            />
          )}
          <ImageUploader
            insertionIndex={index + 1}
            newPostElements={newPostElements}
            setNewPostElements={setNewPostElements}
          />
        </div>
      ))}
      <Button primary type="button" onClick={() => submitPost(newPostElements, post)} label="Post to Production" />
    </div>
  )
}
