'use client'
import { useUser } from '@/hooks/useUser'

const AboutPage = () => {
  const { isAdmin, user } = useUser()
  return isAdmin ? (
    <div>Admin</div>
  ) : user ? (
    <section className='about'>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
    </section>
  ) : (
    <section className='about'>
      <div>Register</div>
    </section>
  )
}

export default AboutPage
