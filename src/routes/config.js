export default {
  menus: [ // 菜单相关路由
    { key: '/app/dashboard/index', title: 'Home', component: 'Homepage' },
    { key: '/app/download', title: 'Download', component: 'Download' },
    { key: '/app/products', title: 'Products', component: 'Products' },
    { key: '/app/maintenance', title: 'Maintenance', component: 'Maintenance' },
    { key: '/app/integration', title: 'Integration', component: 'Integration' },
    { key: '/app/register', title: 'Register', component: 'Register' },
    { key: '/app/login', title: 'Login', component: 'Login' }
  ],
  others: [] // 非菜单相关路由
}