<template>
    <div class="app">
        <main-header></main-header>
        <router-view>
            <home-page></home-page>
        </router-view>
    </div>
</template>

<script>
    import MainHeader from "./components/Header/MainHeader";
    import HomePage from "./components/Home/HomePage";

    export default {
        name: "App",
        components: {
            "main-header": MainHeader,
            "home-page": HomePage
        }
    };
</script>