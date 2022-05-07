<template>
    <div class="page modify">
        <main-header></main-header>
        <password-check></password-check>
    </div>
</template>

<script>
    import MainHeader from "@/components/Header/MainHeader";
    import PasswordCheckPage from "@/pages/User/Modify/PasswordCheckPage";

    export default {
        name: "ModifyPage",
        components: {
            "main-header": MainHeader,
            "password-check": PasswordCheckPage
        },
        data: () => {
            return {
            };
        }

    }
</script>

<style>
</style>