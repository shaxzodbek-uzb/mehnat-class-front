import { getToken } from '@/utils/auth'

export const state = {
  user: {
    is_auth: false,
    id: '',
    fullname: '',
    token: getToken(),
    role: {},
  }
}
