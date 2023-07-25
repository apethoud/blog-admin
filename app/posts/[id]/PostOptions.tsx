'use client'

import Button from "@/app/_UI-components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function PostOptions({ postId, isDeleted }: { postId: string, isDeleted: boolean }) {
  const togglePostDeletion = async () => {
    const supabase = createClientComponentClient()

    const { data, error } = await supabase
      .from('posts')
      .update({ deleted: !isDeleted })
      .eq('id', postId)
      .select()

    if (data) {
      console.log("togglePostDeletion data is: ", data)
      console.log(`post with id: ${postId} deleted`)
    }
    if (error) {
      console.log("DeletePost: Something went wrong")
    }
  }

  return (
    <div className="border border-slate-500">
      <Button label={isDeleted ? "Undelete Post" : "Delete Post"} type="button" onClick={togglePostDeletion} />
    </div>
  )
}