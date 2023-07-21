'use client';

import { Post, InProgressPostElements } from "./interfaces"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { addUiOrderAndPostId, filterPostElementsByType } from "../utils";
import AddText from "./AddText"
import { InProgressPost } from "./interfaces"
import AddImages from "./AddImages"
import { useRouter } from "next/navigation";

export default function CreateNewPost() {
  const [ newPost, setNewPost ] = useState<InProgressPost>({})
  const [ newPostElements, setNewPostElements ] = useState<InProgressPostElements>([])
  const [ step, setStep ] = useState(1)

  const router = useRouter()

  const submitPost = async (newPostElements: InProgressPostElements, post: Post) => {
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
      const completeParagraphsAndImages = addUiOrderAndPostId(newPostElements, postData[0].id)
      const paragraphs = filterPostElementsByType(completeParagraphsAndImages, "paragraph")
      const { data: paragraphsData, error: paragraphsError } = await supabase
        .from('paragraphs')
        .insert(paragraphs)
        .select()
        if (paragraphsError) {
          console.log("paragraphsError is: ", paragraphsError);
        }
        if (paragraphsData) {
          const images = filterPostElementsByType(completeParagraphsAndImages, "image")
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
          setNewPostElements={setNewPostElements}
          setNewPost={setNewPost}
          setStep={setStep}
          step={step}
        />
      )}
      {step === 2 && (
        <AddImages 
          newPostElements={newPostElements}
          setNewPostElements={setNewPostElements}
          post={newPost}
          submitPost={submitPost}
        />
      )}
    </>
  )
}