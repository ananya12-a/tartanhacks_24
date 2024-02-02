/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // routes:[
  //   // { path: '/', component: () => import('../pages/index.vue') },
  //   // { path: '/upload', component: () => import('../pages/upload.vue') },
  // ]
  // extendRoutes: setupLayouts,
})

export default router
