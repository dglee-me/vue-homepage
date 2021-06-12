import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home/HomePage";
import NotFoundComponent from "@/components/Error/PageNotFound";
import Community from "@/pages/Community/CommunityPage";

/* User */
import Join from "@/pages/User/Join/JoinPage";
import Login from "@/pages/User/Login/LoginPage";
import Verify from "@/pages/User/Verify/UserVerify";

/* Article View */
import Article from "../pages/Community/View/ArticleView";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/community", name: "Community", component: Community },
        { path: "/user/login", name: "Login", component: Login },
        { path: "/user/new", name: "Join", component: Join },
        { path: "/user/verify", name: "UserVerify", component: Verify, props: (route) => ({ token: route.query.token }) },
        { path: "/article", name: "Article", component: Article},
        { path: "*", name: "NotFoundComponent", component: NotFoundComponent }
    ]
});