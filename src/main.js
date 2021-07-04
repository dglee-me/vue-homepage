import Vue from "vue";
import router from "@/router/index";
import { store } from "@/store/index";

import App from "./App"

new Vue({
    router,
    store,
    render: h=> h(App)
}).$mount("#root");