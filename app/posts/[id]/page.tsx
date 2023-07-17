import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import BlogTitle from "@/app/_UI-components/BlogTitle";
import Text from "@/app/_UI-components/Text";
import Image from "next/image";
import { formatDate } from "@/app/utils";

export default async function ViewPost({ params }) {
  const supabase = createClientComponentClient({ cookies })
  
  const { data } = await supabase
    .from('posts')
    .select(`
      *,
      paragraphs (
        post_id,
        id,
        ui_order,
        body
      ),
      images (
        post_id,
        id,
        ui_order,
        url
      )
    `)
    .eq('id', params.id)

  const post = data ? data[0] : null
  const postElements = [...post.paragraphs, ...post.images]
  postElements.sort((a, b) => (a.ui_order > b.ui_order) ? 1 : -1)

  return (
    <>
    {post && (
      <>
        <BlogTitle>{post.title}</BlogTitle>
        <div className="italic text-slate-500">Posted {formatDate(post.created_at)}</div>
        {postElements.map((element, index) => (
          <>
            {element.body && (
              <Text>{element.body}</Text>
            )}
            {element.url && (
              <Image 
              src={element.url}
              width={800}
              height={600}
              className="my-6"
              alt="pic"
            />
            )}
          </>
        ))}
      </>
    )}
    </>
  )
}