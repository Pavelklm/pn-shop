import { AllowedLangs } from '@/constants/lang'

export const getFullDateAndTime = () => {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}

export const getTimeOfDay = (currentLang: AllowedLangs) => {
  const now = new Date()
  const hours = now.getHours()

  if (hours < 6) {
    return currentLang === AllowedLangs.RU ? 'Доброй ночи' : 'Greetings'
  }

  if (hours < 12) {
    return currentLang === AllowedLangs.RU ? 'Доброе утро' : 'Good morning'
  }
  if (hours < 18) {
    return currentLang === AllowedLangs.RU ? 'Добрый день' : 'Good afternoon'
  }
  return currentLang === AllowedLangs.RU ? 'Добрый вечер' : 'Good evening'
}
