import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import BlogTitle from "@/app/_UI-components/BlogTitle";
import ReactMarkdown from "react-markdown";
import Text from "@/app/_UI-components/Text";
import Image from "next/image";
import { formatDate } from "@/app/utils";
import H1 from "@/app/_UI-components/H1";
import H2 from "@/app/_UI-components/H2";
import H3 from "@/app/_UI-components/H3";

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
        <div className="italic text-slate-500 dark:text-slate-400">Posted {formatDate(post.created_at)}</div>
        {postElements.map((element, index) => (
          <>
            {element.body && (
              <ReactMarkdown components={{ p: Text, h1: H1, h2: H2, h3: H3 }}>{element.body}</ReactMarkdown>
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