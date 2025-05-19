'use client'

import { emailwhitelist } from '@/constants/emailWhitelist'
import { useAppDispatch } from '@/context/hooks'
import { setUser } from '@/context/user'
import { useState } from 'react'

interface FormData {
  name: string
  lastName: string
  email: string
  phone: string
}

interface FormErrors {
  name: boolean
  lastName: boolean
  email: boolean
  phone: boolean
}

export function useFormHandlers(user: any) {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    lastName: false,
    email: false,
    phone: false,
  })

  const validateField = (id: keyof FormData, value: string): boolean => {
    switch (id) {
      case 'name':
      case 'lastName':
        if (!value) {
          break
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ]{2,30}$/.test(value.trim())) {
          return true
        }

        break
      case 'email':
        if (!value) {
          break
        }
        const domain = value.split('@')[1]?.toLowerCase()
        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          !emailwhitelist.includes(domain)
        ) {
          return true
        }
        break
      case 'phone':
        if (!value) {
          break
        }
        if (!/^\d{7,15}$/.test(value)) {
          return true
        }
        break
    }
    return false
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target as { id: keyof FormData; value: string }

    setFormData((prev) => ({ ...prev, [id]: value }))

    const error = validateField(id, value)
    setErrors((prev) => ({ ...prev, [id]: error }))
  }

  const handleSubmit = async () => {
    const payload = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value.trim() !== '')
    ) as FormData

    if (Object.keys(payload).length === 0) {
      return
    }

    const newErrors: FormErrors = {
      name: false,
      lastName: false,
      email: false,
      phone: false,
    }

    ;(Object.keys(payload) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, payload[key])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some(Boolean)

    if (hasErrors) return

    try {
      const res = await fetch('/api/users/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, user }),
      })

      const isUpdatedUser = await res.json()

      if (isUpdatedUser.status === 200) {
        const updatedUser = {
          ...user.user,
          ...payload,
        }

        dispatch(setUser(updatedUser))
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
        })
        setTimeout(() => {
          document.querySelectorAll('input').forEach((input) => {
            if (input.value === '') {
              input.classList.add('placeholder')
            }
          })
        }, 10)
      }

      if (!res.ok) throw new Error('Ошибка обновления')
    } catch (err) {
      console.error(err)
    }
  }
  return { formData, errors, handleChange, handleSubmit }
}
