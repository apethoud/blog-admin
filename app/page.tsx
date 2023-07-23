import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Text from './_UI-components/Text'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      {session ? (
        <Text>You're logged in!</Text>
      ) : (
        <Text>Login to view and edit posts</Text>
      )}
    </>
  )
}
