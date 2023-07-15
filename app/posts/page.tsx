import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import PostCard from "./PostCard";
import { formatDate } from "../utils";
import NewPostButton from "./NewPostButton";
import Link from "next/link";

export default async function Posts() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts } = await supabase
    .from('posts')
    .select('id,created_at,title');

  return (
    <>
      <div>Posts</div>
      <div className="flex flex-col py-3 text-sm text-neutral-100">
        <NewPostButton />
        {posts && posts?.map(post => (
          <Link href={`/posts/${post.id}`}>
            <PostCard>
              <div>{formatDate(post.created_at, "MMM D 'YY")}</div>
              <div className="font-bold">{post.title}</div>
            </PostCard>
          </Link>
        ))}
      </div>
    </>
  )
}