import type { RouteRecordRaw } from 'vue-router'
import Workspace from '@/views/workspace/index.vue'
import Test from '@/views/test/index.vue'
import NotFound from '@/views/not-found.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Workspace',
    component: Workspace,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]

export default routes
