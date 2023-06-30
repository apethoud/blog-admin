'use client'

import { useState } from "react"
import AddText from "./AddText"
import { Post } from "./interfaces"

type InProgressPost = Partial<Post>

export default function CreateNewPost() {
  const [ newPost, setNewPost ] = useState<InProgressPost>({})
  const [ step, setStep ] = useState(1)
  console.log("newPost: ", newPost);
  return (
    <>
      {step === 1 && (
        <AddText 
          setNewPost={setNewPost}
          setStep={setStep}
          step={step}
        />
      )}
      {step === 2 && (
        <div>Page 2</div>
      )}
    </>
  )
}