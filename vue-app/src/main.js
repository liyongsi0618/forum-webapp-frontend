import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

// vuetify
import vuetify from './plugins/vuetify'
app.use(vuetify)

app.mount('#app')
