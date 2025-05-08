'use client'

import { useLang } from '@/hooks/useLang'
import { useUser } from '@/hooks/useUser'
import { useUserAvatar } from '@/hooks/useUserAvatar'
import Image from 'next/image'
import Link from 'next/link'

const ProfileDashboard = () => {
  const user = useUser()
  const { src, alt } = useUserAvatar()
  const { lang, translations } = useLang()

  return (
    <div className='ProfileDashboard'>
      <div className='ProfileDashboard__container'>
        <div className='ProfileDashboard__top_inner'>
          <div className='ProfileDashboard__profile'>
            <Link
              href={'/Profile/Settings'}
              className='btn-reset ProfileDashboard__image__btn'
            >
              <Image
                src={src ? src : '/img/profile.png'}
                alt={alt ? alt : 'profile'}
                width={120}
                height={120}
                draggable={false}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </Link>
            <div className='ProfileDashboard__name'>
              <h3 className='ProfileDashboard__name__title'>
                {user?.user?.name}
              </h3>
              <p className='ProfileDashboard__name__role'>{user?.user?.role}</p>
            </div>
            <div className='ProfileDashboard__edit'>
              <Link
                href={'/Profile/Settings'}
                className='ProfileDashboard__edit__btn'
              >
                {translations[lang].ProfileDashboard.edit__profile}
              </Link>
            </div>
          </div>
          <div className='ProfileDashboard__billing'>
            <div className='ProfileDashboard__billing__title'>
              {translations[lang].ProfileDashboard.billing_address}
            </div>
            <div className='ProfileDashboard__billing__info'>
              <div className='ProfileDashboard__billing__name'>
                <p>{user?.user?.name}</p>
              </div>
              <div className='ProfileDashboard__billing__address'>
                <p>adress</p>
              </div>
              <div className='ProfileDashboard__billing__email'>
                <p>{user?.user?.email}</p>
              </div>
              <div className='ProfileDashboard__billing__phone'>
                +999999999999
              </div>
            </div>
            <div className='ProfileDashboard__billing__edit'>
              <Link
                href={'/Profile/Settings'}
                className='ProfileDashboard__billing__edit__btn'
              >
                {translations[lang].ProfileDashboard.billing_address}
              </Link>
            </div>
          </div>
        </div>
        <div className='ProfileDashboard__orderhistory'>
          <div className='ProfileDashboard__orderhistory__top'>
            <div className='ProfileDashboard__orderhistory__title'>
              {translations[lang].ProfileDashboard.order__history_title}
            </div>
            <button className='ProfileDashboard__orderhistory__viewall btn-reset'>
              {translations[lang].ProfileDashboard.view__all}
            </button>
          </div>
          <div className='ProfileDashboard__orderhistory__columnname'>
            <div className='ProfileDashboard__orderhistory__columnname__item'>
              {translations[lang].ProfileDashboard.order__id}
            </div>
            <div className='ProfileDashboard__orderhistory__columnname__item'>
              {translations[lang].ProfileDashboard.date}
            </div>
            <div className='ProfileDashboard__orderhistory__columnname__item'>
              {translations[lang].ProfileDashboard.total}
            </div>
            <div className='ProfileDashboard__orderhistory__columnname__item'>
              {translations[lang].ProfileDashboard.status}
            </div>
          </div>
          <div className='ProfileDashboard__orderhistory__items'>
            <p className='ProfileDashboard__orderhistory__items__empty'>
              {translations[lang].ProfileDashboard.empty__order__history}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDashboard
