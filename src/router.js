import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/apps',
    name: 'Apps',
    component: loadPage('AppsPage')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: loadPage('SkillsPage')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
