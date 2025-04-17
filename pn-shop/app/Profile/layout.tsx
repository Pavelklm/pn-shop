import ProfileNavigation from '@/components/elements/Profile/ProfileNavigation'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='profile-page container'>
      <aside>
        <ProfileNavigation />
      </aside>
      <main>{children}</main>
    </div>
  )
}
