import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App)
const pinia = createPinia();
const vuetify = createVuetify({
    theme:{
        defaultTheme: "dark"
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets:{
            mdi
        }
    },
    components,
    directives,
    })
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
