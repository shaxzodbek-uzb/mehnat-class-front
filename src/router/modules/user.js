const userRouter = {
    path: 'users/',
    component: () => import('@/App'),
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
        }
    ]
}
export default userRouter