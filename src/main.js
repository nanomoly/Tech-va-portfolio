

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Disable Vue Devtools
app.config.devtools = false


createApp(App).mount('#app')
