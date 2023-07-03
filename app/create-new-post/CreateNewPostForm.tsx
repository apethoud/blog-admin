'use client'

import { InProgressParagraphs, Paragraphs, Post } from "./interfaces"
import { useState } from "react"
import AddText from "./AddText"
import { InProgressPost } from "./interfaces"
import AddImages from "./AddImages"

export default function CreateNewPostForm({ submitPost }: { submitPost: (paragraphs: Paragraphs, post: Post) => Promise<void> }) {
  const [ newPost, setNewPost ] = useState<InProgressPost>({})
  const [ newParagraphs, setNewParagraphs ] = useState<InProgressParagraphs>([])
  const [ step, setStep ] = useState(1)
  return (
    <>
      {step === 1 && (
        <AddText 
          setNewParagraphs={setNewParagraphs}
          setNewPost={setNewPost}
          setStep={setStep}
          step={step}
        />
      )}
      {step === 2 && (
        <AddImages 
          paragraphs={newParagraphs}
          post={newPost}
          submitPost={submitPost}
        />
      )}
    </>
  )
}