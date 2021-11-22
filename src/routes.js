import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Search from './pages/Search.vue'
import Explore from './pages/Explore.vue'
// import Check from './pages/Check.vue'

import NotFound from './pages/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/search', meta: { title: 'Search' }, component: Search },
  { path: '/explore', meta: { title: 'Explore' }, component: Explore },
  // { path: '/check', meta: { title: 'Check' },component: Check },
  { path: '/:path(.*)', meta: { title: 'NotFound' }, component: NotFound },
]
