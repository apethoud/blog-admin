'use client';

import { InProgressParagraphs, Paragraphs, Post } from "./interfaces"
import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createParagraphRowsWithPostIdsAdded } from "../utils";
import AddText from "./AddText"
import { InProgressPost } from "./interfaces"
import AddImages from "./AddImages"
import { useRouter } from "next/navigation";

export default function CreateNewPost() {
  const [ newPost, setNewPost ] = useState<InProgressPost>({})
  const [ newParagraphs, setNewParagraphs ] = useState<InProgressParagraphs>([])
  const [ step, setStep ] = useState(1)

  const router = useRouter()

  const submitPost = async (paragraphs: Paragraphs, post: Post) => {
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
      const paragraphsWithPostIds = createParagraphRowsWithPostIdsAdded(paragraphs, postData[0].id)
      const { data: paragraphsData, error: paragraphsError } = await supabase
        .from('paragraphs')
        .insert(paragraphsWithPostIds)
        .select()
        if (paragraphsError) {
          console.log("paragraphsError is: ", paragraphsError);
        }
        if (paragraphsData) {
          router.push("/")
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
          paragraphs={newParagraphs}
          post={newPost}
          submitPost={submitPost}
        />
      )}
    </>
  )
}