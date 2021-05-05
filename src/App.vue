<template>
    <div class="app">
        <main-header></main-header>
        <router-view></router-view>
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