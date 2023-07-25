'use client'

import Button from "@/app/_UI-components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function PostOptions({ postId }: { postId: string }) {
  const deletePost = async () => {
    const supabase = createClientComponentClient()


    const { data, error } = await supabase
      .from('posts')
      .update({ deleted: true })
      .eq('id', postId)
      .select()

    if (data) {
      console.log("deletePost data is: ", data)
      console.log(`post with id: ${postId} deleted`)
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