import { createApp } from "vue";
import { createPinia } from "pinia";
import "@unocss/reset/normalize.css";
import "virtual:uno.css";
import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");
