import { InProgressImages, InProgressParagraphs, InProgressPost, InProgressPostElement, InProgressPostElements } from "./interfaces"
import PageHeader from "../_UI-components/PageHeader"
import Button from "../_UI-components/Button"
import ImageUploader from "../_ImageUploader/ImageUploader"
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import Paragraph from "../_UI-components/Paragraph"

export default function AddImages({ 
  newParagraphs,
  setNewParagraphs,
  newImages,
  setNewImages,
  post, 
  submitPost 
}: { 
  newParagraphs: InProgressParagraphs,
  setNewParagraphs: Dispatch<SetStateAction<InProgressParagraphs>>,
  newImages: InProgressImages,
  setNewImages: Dispatch<SetStateAction<InProgressImages>>,
  post: InProgressPost, 
  submitPost: (newParagraphs: InProgressParagraphs, newImages: InProgressImages, post: InProgressPost) => void 
}) {
  const newPostElements = [...newParagraphs, ...newImages].sort((a, b) => (a.ui_order && b.ui_order) ? a.ui_order - b.ui_order : 0);
  return (
    <div className="flex flex-col">
      <PageHeader text="Add Images" />
      <div className="text-md font-bold text-slate-900 dark:text-slate-100 my-2">{post.title}</div>
      <ImageUploader
        insertionIndex={0}
        newParagraphs={newParagraphs}
        setNewParagraphs={setNewParagraphs}
        newImages={newImages}
        setNewImages={setNewImages}
      />
      {newPostElements.map((postElement: InProgressPostElement, index: number) => (
        <div key={index}>
          {postElement.type === "paragraph" && postElement.body && (
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 my-2 p-4">
              <Paragraph body={postElement.body} />
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
            newParagraphs={newParagraphs}
            setNewParagraphs={setNewParagraphs}
            newImages={newImages}
            setNewImages={setNewImages}
          />
        </div>
      ))}
      <Button primary type="button" onClick={() => submitPost(newParagraphs, newImages, post)} label="Post to Production" />
    </div>
  )
}
