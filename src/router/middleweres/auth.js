import { getToken } from '@/utils/auth' // get token from cookie

export default function auth({ to, from, next, store }) {
  const hasToken = getToken()
  if (to.name === 'Login' && ((hasToken === undefined) || (hasToken === ''))) {
    return next()
  }
  if (hasToken) {
    debugger
    store.dispatch('auth/getInfo')
      .then(res => {
        let role_name = 'user'
        try {
          role_name = res.result.user.roles[0].name
        } catch (exp) {
          console.log(exp)
        }
        if (res.result.deadline) {
          this.$router.push({ name: 'DeadlineForm' });
        } else if (to.name === 'Login') {
          switch (role_name) {
            case 'user': return next({ name: 'UserIndex' })
          }
        }
        return next()
      })
      .catch(err => {
        console.log(err)
        store.dispatch('auth/resetToken')
        next({ name: 'Login' })
      })
  } else {
    return next({ name: 'Login' })
  }
}
