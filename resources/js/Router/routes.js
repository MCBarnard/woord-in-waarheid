const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../Pages/Tuis.vue')
    },
    {
        path: '/wie-is-ons',
        name: 'wie-is-ons',
        component: () => import('../Pages/WieIsOns.vue')
    },
    {
        path: '/bedieninge',
        name: 'bedieninge',
        component: () => import('../Pages/Bedieninge.vue')
    },
];

export default routes;
