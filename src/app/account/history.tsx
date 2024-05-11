'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [arr, setArr] = useState<any>([])
  const [value, setValue] = useState('')

  const getData = useCallback(async () => {
    let { data } = await supabase.from('history').select().eq('user_id', user?.id)
    setArr(data)
  }, [user, supabase])

  useEffect(() => {
    getData()
  }, [user, getData])

  const uploadData = async (data: any) => {
    await supabase.from('history').insert(data)
  }

  return (
    <>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
      <img src={user?.user_metadata?.avatar_url} alt="avatar icon" />
      <div>{arr?.length} times</div>
      {arr?.map((a: any) => (
        <div key={a.id}>
          <div>
            {a.title} : {a.created_at}
          </div>
        </div>
      ))}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          uploadData({
            id: Math.floor(Math.random() * 100),
            user_id: user?.id,
            title: value,
            created_at: new Date().toISOString(),
          })
        }
      >
        submit
      </button>
    </>
  )
}
