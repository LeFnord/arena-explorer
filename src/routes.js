// import Home from './pages/Home.vue'
// import About from './pages/About.vue'
// import Check from './pages/Check.vue'

import Search from './pages/Search.vue'
import Explore from './pages/Explore.vue'
import NotFound from './pages/NotFound.vue'

export const routes = [
  { path: '/', component: Search, meta: { title: 'Search' } },
  // { path: '/search', meta: { title: 'Search' }, component: Search },
  { path: '/explore', meta: { title: 'Explore' }, component: Explore },
  // { path: '/check', meta: { title: 'Check' },component: Check },
  { path: '/:path(.*)', meta: { title: 'NotFound' }, component: NotFound },
]
