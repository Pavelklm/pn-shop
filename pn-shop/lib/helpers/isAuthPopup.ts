import { useAppSelector } from '@/context/hooks'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const isAuthPopup = useAppSelector((state) => state.auth.isAuthPopupOpen)
