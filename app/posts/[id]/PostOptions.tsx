'use client'

import Button from "@/app/_UI-components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function PostOptions({ post }) {
  const deletePost = async () => {
    const supabase = createClientComponentClient()

    console.log("post: ", post)

    const { data, error } = await supabase
      .from('posts')
      .update({ deleted: true })
      .eq('id', post.id)
      .select()

    if (data) {
      console.log("deletePost data is: ", data)
      console.log(`post with id: ${post.id} deleted`)
    }
    if (error) {
      console.log("DeletePost: Something went wrong")
    }
  }

  return (
    <div className="border border-slate-500">
      <Button label="Delete Post" type="button" onClick={deletePost} />
    </div>
  )
}