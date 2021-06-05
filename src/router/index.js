import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home/HomePage";
import NotFoundComponent from "@/components/Error/PageNotFound";
import Community from "@/pages/Community/CommunityPage";

/* User */
import Join from "@/pages/User/Join/JoinPage";
import Login from "@/pages/User/Login/LoginPage";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/community", name: "Community", component: Community },
        { path: "/user/login", name: "Login", component: Login },
        { path: "/user/new", name: "Join", component: Join },
        { path: "*", name: "NotFoundComponent", component: NotFoundComponent }
    ]
});