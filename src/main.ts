import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import { useRegisterComponents } from './acme/utils/register'

import router from "./router";

const app = createApp(App)

useRegisterComponents(app)

app.use(router)
app.mount("#app");
