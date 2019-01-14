export default {
  menus: [ // 菜单相关路由
    { key: '/app/dashboard/index', title: 'Home', component: 'Homepage' },
    { key: '/app/products', title: 'Products', component: 'Products' },
    { key: '/app/integration', title: 'Integration', component: 'Integration' },
    { key: '/app/download', title: 'Download', component: 'Download' },
    { key: '/app/maintenance', title: 'Maintenance', component: 'Maintenance' }
  ],
  others: [
    { key: '/app/login', title: 'Login', component: 'Login' },
    { key: '/app/register', title: 'Register', component: 'Register' },
    { key: '/app/productDetail', title: 'ProductDetail', component: 'ProductDetail' },

  ] // 非菜单相关路由
}