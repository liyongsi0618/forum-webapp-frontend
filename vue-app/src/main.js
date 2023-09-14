import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

// vuetify
import vuetify from './plugins/vuetify'
app.use(vuetify)

// vue-router
import router from './router/index'
app.use(router)

app.mount('#app')
