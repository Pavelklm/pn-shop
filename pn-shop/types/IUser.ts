export interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  image?: string
  role?: string
  createdAt: string
  updatedAt: string
  subscribed: boolean
  subEmail?: string
}

export interface ITakeUser {
  name: string
  email: string
  image?: string
}
