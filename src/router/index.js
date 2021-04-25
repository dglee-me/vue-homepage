import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home/HomePage";
import Community from "../components/Community/CommunityPage";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/community", name: "Community", component: Community }
    ]
});