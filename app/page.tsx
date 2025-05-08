'use client'
import Advantage from '@/components/modules/Advantage/Advantage'
import TopBoard from '@/components/modules/TopBoard/TopBoard'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  useEffect(() => {
    const flashError = Cookies.get('flash_error')
    if (flashError) {
      toast.error(`${flashError}. Please log in first.`)
      Cookies.remove('flash_error')
    }
  }, [])
  return (
    <>
      <TopBoard />
      <Advantage />
    </>
  )
}
