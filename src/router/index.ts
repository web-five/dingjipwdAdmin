import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: '首页',
          component: () => import('@/views/home.vue'),
          meta: { title: '仪表盘', icon: 'el-icon-eleme' },
        },
        {
          path: '/user',
          name: '用户列表',
          children: [
            {
              path: '/vip',
              name: 'vip',
              component: () => import('@/views/vip.vue'),
            },
            {
              path: '/player',
              name: '陪玩',
              component: () => import('@/views/player.vue'),
            },
          ]
        },
      ]
    }
  ]
})

export default router
