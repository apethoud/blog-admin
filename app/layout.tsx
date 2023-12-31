import './globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from './logout-button'
import Text from './_UI-components/Text'
import { formatDate } from './utils'

export const metadata = {
  title: 'Andrew Pethoud | Admin',
  description: 'Admin portal for andrewpethoud.dev',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center">
          <div className="flex-1 flex flex-col max-w-3xl mt-24">
            <h1 className="text-2xl mb-2 flex justify-between">
              <span className="sr-only">Andrew Pethoud Blog Admin</span>
            </h1>
            <div className="flex justify-between border-b border-slate-300 dark:border-slate-700 py-3">
              <Link href="/" className="text-lg mr-12">
                <span className="font-bold text-slate-900 dark:text-slate-100">Andrew Pethoud</span>
                <span className="text-slate-900 dark:text-slate-100"> | </span>
                <span className="font-bold uppercase text-violet-600 dark:text-violet-500">Admin</span>
              </Link>
              <span className="text-md text-slate-900 dark:text-slate-100">
                {user ? (
                  <span className="flex gap-4">
                    Hey, {user.email}! <span className="border-r border-slate-300 dark:border-slate-700"></span>{' '}
                    <LogoutButton />
                  </span>
                ) : (
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                )}
              </span>
            </div>
            {children}
            <div className="flex">
              <Text>&copy; {formatDate(undefined, "YYYY")} Andrew Pethoud</Text>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
