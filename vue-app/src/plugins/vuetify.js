// Vuetify
import 'vuetify/styles'

// 丢失这一句会导致图标失效
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
//   icons: {
//     defaultSet: 'mdi', // This is already the default value - only for display purposes
//   },
  components,
  directives,
})
