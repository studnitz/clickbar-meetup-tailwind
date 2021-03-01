import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Landing from "./pages/LandingDemo.vue"
import LandingFinal from "./pages/LandingFinal.vue"
import LandingStart from "./pages/LandingStart.vue"
import "./index.css"

const router = createRouter({
  routes: [
    { path: "/", component: Landing },
    { path: "/final", component: LandingFinal },
    { path: "/start", component: LandingStart },
  ],
  history: createWebHistory(),
})

createApp(App).use(router).mount("#app")
