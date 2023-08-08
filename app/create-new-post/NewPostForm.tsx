'use client';

import { InProgressPost, InProgressParagraphs, InProgressImages } from "./interfaces"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { addPostId, removeElementType } from "../utils";
import AddText from "./AddText"
import AddImages from "./AddImages"
import { useRouter } from "next/navigation";

export default function NewPostForm() {
  const [ newPost, setNewPost ] = useState<InProgressPost>({})
  const [ newParagraphs, setNewParagraphs ] = useState<InProgressParagraphs>([])
  const [ newImages, setNewImages ] = useState<InProgressImages>([])
  const [ step, setStep ] = useState(1)

  const router = useRouter()

  const submitPost = async (newParagraphs: InProgressParagraphs, newImages: InProgressImages, post: InProgressPost) => {
    const supabase = createClientComponentClient()
    const { data: postData, error: postError } = await supabase
      .from('posts')
      .insert([
        post
      ])
      .select()
    if (postError) {
      console.log("postError is: ", postError);
    }
    if (postData) {
      const completeParagraphs = addPostId(newParagraphs, postData[0].id)
      const paragraphs = removeElementType(completeParagraphs, "paragraph")
      const { data: paragraphsData, error: paragraphsError } = await supabase
        .from('paragraphs')
        .insert(paragraphs)
        .select()
        if (paragraphsError) {
          console.log("paragraphsError is: ", paragraphsError);
        }
        if (paragraphsData) {
          const completeImages = addPostId(newImages, postData[0].id)
          const images = removeElementType(completeImages, "image")
          const { data: imagesData, error: imagesError } = await supabase
            .from('images')
            .insert(images)
            .select()
            if (imagesError) {
              console.log("imagesError is: ", imagesError);
            }
            if (imagesData) {
              router.push("/")
            }
        }
    }
  }

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
          newParagraphs={newParagraphs}
          setNewParagraphs={setNewParagraphs}
          newImages={newImages}
          setNewImages={setNewImages}
          post={newPost}
          submitPost={submitPost}
        />
      )}
    </>
  )
}