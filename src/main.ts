import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.js'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Firebase

import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router/index'

const app = createApp(App)

const vuetify = createVuetify({
 components,
 directives
})

app.use(VueFire, {
 firebaseApp,
 modules: [VueFireAuth()]
})
app.use(vuetify)
app.use(plugin, defaultConfig(config))
app.use(createPinia())
app.use(router)


app.mount('#app')
