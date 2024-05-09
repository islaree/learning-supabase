import AccountForm from './account-form'
import History from './history'
import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <AccountForm user={user} />
      <History user={user} />
    </>
  )
}
