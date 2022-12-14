import { createApp } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Vuetify from './configs/vuetify.config'
import queryClientConfig from './configs/query.config'
import routes from './configs/route.config'

import '@unocss/reset/tailwind.css'
import './main.css'
import 'vuetify/styles'
import '@arco-design/web-vue/dist/arco.css'
import 'uno.css'

import App from './App.vue'

const app = createApp(App)
  .use(VueQueryPlugin, { queryClientConfig })
  .use(Vuetify)
  .use(createPinia())
  .use(createRouter({
    history: createWebHashHistory(),
    routes,
  }))
  .use(ArcoVue)

app.mount('#app')
