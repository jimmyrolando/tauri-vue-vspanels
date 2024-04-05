import { createMemoryHistory, createRouter } from 'vue-router'

import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
import Page3 from './views/Page3.vue'
import Page4 from './views/Page4.vue'

const routes = [
  { path: '/', component: Page1, alias: '/page1'},
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router