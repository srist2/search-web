import Vue from 'vue'
import Router from 'vue-router'
const layout = () => import('@/layout')

Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    name: 'index',
    component: layout,
    children: [
      {
        path: '',
        component: () => import('@/views/index'),
        name: '首页',
        meta: {
          icon: 'el-icon-s-home'
        }
      }
    ],
  },
  {
    path: '/searchArea',
    name: '/searchArea',
    component: layout,
    children: [
      {
        path: '/familySearch',
        component: () => import('@/views/area/familySearch')
      },
      {
        path: '/seekFamily',
        component: () => import('@/views/area/seekFamily')
      },
      {
        path: '/seekOther',
        component: () => import('@/views/area/seekOther')
      },
      {
        name: '/missMessageDetails',
        path: '/missMessageDetails',
        component: () => import('@/views/area/details')
      }
    ]
  },
  {
    path: '/missRegister',
    name: '/missRegister',
    component: layout,
    children: [
      {
        path: '/missRegister',
        component: () => import('@/views/missRegister')
      }
    ]
  },
  {
    path: '/common',
    name: '/common',
    component: layout,
    children: [
      {
        path: '/tracingGuide',
        component: () => import('@/views/common/tracingGuide')
      },
      {
        path: '/registrationProcess',
        component: () => import('@/views/common/registrationProcess')
      },
      {
        path: '/defensiveCommon',
        component: () => import('@/views/common/defensiveCommon')
      },
      {
        name: '/commonDetails',
        path: '/commonDetails/:content',
        component: () => import('@/views/common/details')
      },
    ]
  },
  {
    path: '/about',
    name: '/about',
    component: layout,
    children: [
      {
        path: '/cooperativeMedia',
        component: () => import('@/views/about/cooperativeMedia')
      },
      {
        path: '/contact',
        component: () => import('@/views/about/contact')
      },
    ]
  },
]

const router = new Router({
  mode: 'history', //去除url中的#
  routes: constantRouter,
  scrollBehavior (to, from, savedPosition) {
    // 解决路由跳转后 会滚动到底部
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
export default router
