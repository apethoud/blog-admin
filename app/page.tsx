import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Text from './_UI-components/Text'
import Link from 'next/link'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      {session ? (
        <>
          <Text>You're logged in!</Text>
          <Link href="/posts">
            <Text>View Post List</Text>
          </Link>
        </>
      ) : (
        <Text>Login to view and edit posts</Text>
      )}
    </>
  )
}
