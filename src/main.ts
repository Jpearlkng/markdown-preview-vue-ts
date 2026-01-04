import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Connects the router folder

const app = createApp(App)
app.use(router) // Tells Vue to use the router logic
app.mount('#app')