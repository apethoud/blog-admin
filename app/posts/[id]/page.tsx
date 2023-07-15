import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

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
        <div>{post.title}</div>
        <div>{post.created_at}</div>
        {postElements.map((element, index) => (
          <>
            {element.body && (
              <div>{element.body}</div>
            )}
            {element.url && (
              <Image 
              src={element.url}
              width={800}
              height={600}
              className="my-2"
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