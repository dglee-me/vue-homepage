<template>
    <div class="app">
        <main-header></main-header>
        <home-page></home-page>
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

<style>
    @import "./assets/css/App.css";
</style>