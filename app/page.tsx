import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './logout-button'
import Posts from './posts/page'
import PostCard from './posts/PostCard'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      {user ? (
        <Posts />
      ) : (
        <PostCard>
          Login to view and edit posts
        </PostCard>
      )}
    </>
  )
}
