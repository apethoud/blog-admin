import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import BlogTitle from "@/app/_UI-components/BlogTitle";
import Text from "@/app/_UI-components/Text";
import Image from "next/image";
import { formatDate } from "@/app/utils";
import Link from 'next/link'
import { redirect } from "next/navigation";
import PostOptions from "./PostOptions";
import Paragraph from "@/app/_UI-components/Paragraph";

export const revalidate = 0;

const imageLoader = ({ src, width, quality } : { src: string, width: number, quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default async function ViewPost({ params }: { params: { id: string }}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/unauthenticated')
  }
  
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
        url,
        alt_text
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
        <PostOptions postId={params.id} isDeleted={post.deleted} />
        <BlogTitle>{post.title}</BlogTitle>
        <div className="italic text-slate-500 dark:text-slate-400">Posted {formatDate(post.created_at)}</div>
        {postElements.map((element, index) => (
          <div key={index}>
            {element.body && (
              <Paragraph body={element.body} />
            )}
            {element.url && (
              <Image 
              loader={imageLoader}
              src={element.url}
              width={800}
              height={600}
              className="my-6"
              alt={element.alt_text}
            />
            )}
          </div>
        ))}
        <div className="mt-8 border-t border-violet-600 dark:border-violet-500 pt-6 font-sans italic text-lg text-slate-900 dark:text-slate-100 antialiased">
          Hey, I'm Andrew Pethoud! I'm a full-stack software engineer <span className="not-italic">💻</span> who loves building joyful digital experiences for humans <span className="not-italic">👫</span>. I'm also passionate about walkable communities <span className="not-italic">🌳</span> and making cities safer for bikers and pedestrians <span className="not-italic">🚴</span>, especially when they're my own kids <span className="not-italic">🧒</span>.
        </div>
        <div className="flex">
          <Text>Connect with me:</Text>
          <Link 
            href="https://twitter.com/AndrewPethoud" 
            target="_blank"
            className="font-sans font-bold text-lg text-violet-600 dark:text-violet-500 antialiased my-4 mx-2">
              Twitter
          </Link>
          <Text>|</Text>
          <Link 
            href="https://www.linkedin.com/in/andrew-pethoud-abb81967/" 
            target="_blank"
            className="font-sans font-bold text-lg text-violet-600 dark:text-violet-500 antialiased my-4 mx-2">
              LinkedIn
          </Link>
        </div>
      </>
    )}
    </>
  )
}