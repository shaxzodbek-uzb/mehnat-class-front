import user from '../middleweres/user'
const userRouter = {
    path: 'users/',
    component: () => import('@/App'),
    meta: { middleware: [user] },
    children: [
        {
            path: '/',
            name: 'UserIndex',
            component: () => import('@/views/Users/index')
        },
        {
            path: '/create',
            name: 'UserCreate',
            component: () => import('@/views/Users/create')
        },
        {
            path: '/edit/:id(\\d+)',
            name: 'UserEdit',
            component: () => import('@/views/Users/edit')
        },
        {
            path: '/show/:id(\\d+)',
            name: 'UserShow',
            component: () => import('@/views/Users/show')
        },
        {
            path: '/delete/:id(\\d+)',
            name: 'UserDelete'
        }
    ]
}
export default userRouter 