import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
// import RealtimePosts from './realtime-posts'
// import NewPost from './new-post'

export default async function ServerComponent() {
  // const supabase = createServerComponentClient({
  //   cookies,
  // })
  // const { data } = await supabase.from('posts').select('*')

  return (
    <>
      <div>test page</div>
      {/* <NewPost /> */}
      {/* <RealtimePosts serverPosts={data ?? []} /> */}
    </>
  )
}