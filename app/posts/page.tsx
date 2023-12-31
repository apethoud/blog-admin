import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import PostCard from "./PostCard";
import { formatDate } from "../utils";
import NewPostButton from "./NewPostButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import { H3 } from "../_UI-components/Headers";

export default async function Posts() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/unauthenticated')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('id,created_at,title,deleted');

  return (
    <>
      <H3>Posts</H3>
      <div className="flex flex-col py-3 text-sm text-neutral-100">
        <NewPostButton />
        {posts && posts?.map(post => (
          <Link href={`/posts/${post.id}`}>
            <PostCard>
              <div>{formatDate(post.created_at, "MMM D 'YY")}</div>
              <div className="font-bold">{post.title}</div>
              {post.deleted && (
                <div className="italic">Deleted</div>
              )}
            </PostCard>
          </Link>
        ))}
      </div>
    </>
  )
}