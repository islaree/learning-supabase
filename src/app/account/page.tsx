import AccountForm from './account-form'
import History from './history'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log(user)
  if (!user) {
    redirect('/login')
  }

  return (
    <>
      {/* <AccountForm user={user} /> */}
      <History user={user} />
    </>
  )
}
