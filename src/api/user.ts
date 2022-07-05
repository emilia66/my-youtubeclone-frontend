import { request } from '@/utils/request'

interface LoginInput {
  email: string
  password: string
}

export interface User {
  email: string
  token: string
  userName: string
  channelDescription?: string
  avatar?: string
}

interface LoginPayload {
  user: User
}

export const login = (data: LoginInput) => {
  return request.post<LoginPayload>('/api/v1/user/login', data)
}
