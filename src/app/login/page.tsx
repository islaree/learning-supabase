import { signInWithGoogle } from './actions'

export default function LoginPage() {
  return (
    <form action={signInWithGoogle}>
      <button>google</button>
    </form>
  )
}
