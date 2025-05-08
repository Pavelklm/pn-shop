'use client'

import { useAppSelector } from '@/context/hooks'
import translationsJson from '@/public/translations/translations.json'
import { ILang } from '@/types/ILang'

export const useLang = (): ILang => {
  const lang = useAppSelector((state: { lang: string }) => state.lang)
  const translations = translationsJson

  return { lang, translations }
}
