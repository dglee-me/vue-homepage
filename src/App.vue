<template>
    <div class="app">
        <main-header></main-header>
    </div>
</template>

<script>
    import MainHeader from "./components/Header/MainHeader";

    export default {
        name: "App",
        components: {
            "main-header": MainHeader
        }
    };
</script>

<style>
    @import "./assets/css/App.css";
</style>