export default [
    {
        path: '/suggest',
        component: () => import('../pages/Suggest')
    },
    {
        path: '/upload',
        component: () => import('../pages/Upload')
    },
    {
        path: '/el-custom-table',
        component: () => import('../pages/ElCustomTable')
    },

    {
        path: '/custom-table',
        component: () => import('../pages/CustomTable')
    },
];