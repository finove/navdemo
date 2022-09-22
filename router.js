const menuOptions = [
    {
        label: () => h(
            RouterLink,
            {
                to: { path: '/' }
            }, { default: () => '首页' }
        ),
        key: 'menu-home',
    },
    {
        label: () => h(
            RouterLink,
            {
                to: { path: '/about' }
            }, { default: () => '关于' }
        ),
        key: 'menu-about',
    },
    {
        label: '菜单2',
        key: 'dance-dance-dance',
        children: [
            {
                label: '饮品',
                key: 'beverage',
                children: [
                    {
                        label: () =>
                            h(
                                'router-link',
                                {
                                    to: '/',
                                },
                                '威士忌'
                            ),
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: () =>
                            h(
                                'router-link',
                                {
                                    to: '/about',
                                },
                                '三明治'
                            ),
                        key: 'sandwich'
                    }
                ]
            }
        ]
    }
]

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // createWebHistory , createWebHashHistory
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
});