import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import { plugin as formKitPlugin, defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/themes/genesis'
import '@formkit/addons/css/multistep'

const app = createApp(App)
.use(router)
.use(formKitPlugin, defaultConfig({
  plugins: [createMultiStepPlugin()]
}))
.mount('#app')
