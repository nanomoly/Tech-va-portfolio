

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// Disable Vue Devtools
app.config.devtools = false

AOS.init({ duration: 800, once: true })

createApp(App).mount('#app')
