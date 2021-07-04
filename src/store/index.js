import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import commonModule from "@/store/modules/CommonModule";
import loginModule from "@/store/modules/LoginModule";

export const store = new Vuex.Store({
    modules: {
        common: commonModule,
        login: loginModule
    },
    plugins: [
        createPersistedState({
            paths: [
                "login"
            ]
        })
    ]
});