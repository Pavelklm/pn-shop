export interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  image?: string
  role?: string
}

export interface ITakeUser {
  name: string
  email: string
  image?: string
}
