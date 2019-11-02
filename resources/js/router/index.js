import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const constantRouter = [
    {
        path: '/admin',
        name: 'Home',
        redirect: '/admin/',
        component: require('@/layout/App'),
        meta: {
            title: 'Home'
        },
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: require('@/page/admin/dashboard'),
                meta: {
                    title: 'Dashboard',
                },
            },
            {
                path: 'my-account',
                name: 'MyAccount',
                component: require('@/page/admin/profile'),
                meta: {
                    title: 'My Account',
                },
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouter
});


export default router;
