
const UsersIndex = () => import('@/views/Users/index')
const UsersCreate = () => import('@/views/Users/create')
const App = () => import('@/App')


const userRoute = {
    path: '/',
    component: App,
    children: [
        {
            path: 'users/',
            name: 'Users',
            component: UsersIndex
        },
        {
          path: 'create/',
          name: 'Create',
          component: UsersCreate
        }
    ]
}

export default userRoute
