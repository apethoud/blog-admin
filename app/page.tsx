import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './logout-button'
import Posts from './posts/page'
import PostCard from './posts/PostCard'
import Text from './_UI-components/Text'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      {user ? (
        <Text>You're logged in!</Text>
      ) : (
        <Text>Login to view and edit posts</Text>
      )}
    </>
  )
}
