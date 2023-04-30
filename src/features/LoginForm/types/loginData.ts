export interface ILoginResponse {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export interface ILoginData {
  username: string,
  password: string
}
