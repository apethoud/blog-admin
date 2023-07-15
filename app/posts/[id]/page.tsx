import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ViewPost({ params }) {
  const supabase = createClientComponentClient({ cookies })
  
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)

  return (
    <>
    {post ? (
      <div>{post[0].title}</div>
    ) : (
      <div>Nothing yet.</div>
    )}
    </>
  )
}