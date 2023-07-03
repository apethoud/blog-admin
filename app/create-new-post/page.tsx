import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CreateNewPostForm from "./CreateNewPostForm";
import { Paragraphs, Post } from "./interfaces";
import { createParagraphRowsWithPostIdsAdded } from "../utils";

export default async function CreateNewPost() {
  
  const submitPost = async (paragraphs: Paragraphs, post: Post) => {
    'use server'
    const supabase = createServerComponentClient({ cookies })
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
    }
  }
  return (
    <CreateNewPostForm submitPost={submitPost} />
  )
}