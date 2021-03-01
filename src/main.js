import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import LandingFinal from "./pages/LandingFinal.vue"
import Landing from "./pages/Landing.vue"
import "./index.css"

const router = createRouter({
  routes: [
    { path: "/", component: Landing },
    { path: "/final", component: LandingFinal },
  ],
  history: createWebHistory(),
})

createApp(App).use(router).mount("#app")
