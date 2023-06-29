import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import PostCard from "./PostCard";
import { formatDate } from "../utils";

export default async function Posts() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts } = await supabase
    .from('posts')
    .select(`
      *,
      paragraphs (
        post_id,
        id,
        ui_order,
        body
      )
    `);

  return (
    <>
      <div>Posts</div>
      <div className="flex flex-col py-3 text-sm text-neutral-100">
        {posts && posts?.map(post => (
          <PostCard>
            <div>{formatDate(post.created_at, "MMM D 'YY")}</div>
            <div className="font-bold">{post.title}</div>
          </PostCard>
        ))}
      </div>
    </>
  )
}